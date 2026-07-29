import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Files, 
  Search, 
  GitBranch, 
  Sliders, 
  Terminal, 
  Copy, 
  Check, 
  Play, 
  Folder, 
  FileCode, 
  ChevronDown,
  Sparkles,
  RefreshCw
} from 'lucide-react';

interface CodeFile {
  id: string;
  name: string;
  language: string;
  iconColor: string;
  path: string;
  content: string;
  terminalOutput: string[];
}

const FILES: CodeFile[] = [
  {
    id: 'agrobot',
    name: 'agrobot_ai.py',
    language: 'python',
    iconColor: 'text-amber-400',
    path: 'src/ai_iot/agrobot_ai.py',
    content: `# AgroBot AI - Smart Agriculture & Disease Detector
# Author: Sharan B (AI & Cloud Engineer)

import tensorflow as tf
import numpy as np
import firebase_admin
from firebase_admin import db, credentials

class AgroBotEngine:
    def __init__(self, model_path="models/crop_health_v2.h5"):
        self.model = tf.keras.models.load_model(model_path)
        self.labels = ["Healthy", "Early Blight", "Late Blight", "Nutrient Deficient"]
        print(" [AI Engine] Loaded AgroBot Crop Classifier 94.2% Accuracy")

    def predict_leaf_health(self, image_tensor):
        predictions = self.model.predict(image_tensor)
        idx = int(np.argmax(predictions[0]))
        confidence = float(np.max(predictions[0])) * 100
        return {
            "status": self.labels[idx],
            "confidence": f"{confidence:.1f}%",
            "action_required": idx != 0
        }

    def sync_to_firebase(self, sensor_data, prediction):
        ref = db.reference('/agrobot/telemetry')
        ref.push({
            'moisture': sensor_data.get('moisture'),
            'temp_c': sensor_data.get('temp'),
            'diagnosis': prediction['status'],
            'timestamp': db.ServerValue.TIMESTAMP
        })
        print(" [Firebase] Realtime telemetry successfully synced.")

# Initialize AI Instance
bot = AgroBotEngine()
sample_sensor = {"moisture": 42.5, "temp": 28.4}
result = bot.predict_leaf_health(np.random.rand(1, 224, 224, 3))
bot.sync_to_firebase(sample_sensor, result)
`,
    terminalOutput: [
      '$ python agrobot_ai.py',
      '[AI Engine] Loaded AgroBot Crop Classifier (94.2% Accuracy)',
      '[TensorFlow] Processing 224x224 RGB image stream from ESP32 camera...',
      '[Firebase] Realtime telemetry successfully synced to cloud database.',
      '--> Diagnosis Result: Healthy (Confidence: 97.4%)'
    ]
  },
  {
    id: 'psysim',
    name: 'psysim_llm.py',
    language: 'python',
    iconColor: 'text-[#E50914]',
    path: 'src/backend/psysim_llm.py',
    content: `# PsySim - AI Virtual Patient Simulator for Clinical Intake
# Author: Sharan B

from django.db import models
import openai

class PatientPersona:
    def __init__(self, name, age, primary_symptom, emotional_state):
        self.name = name
        self.age = age
        self.symptom = primary_symptom
        self.state = emotional_state

    def generate_prompt_context(self):
        return f"""
        System Instruction: You are acting as {self.name}, a {self.age}-year-old patient.
        Primary Concern: {self.symptom}.
        Current Mood/Affect: {self.state}.
        Respond realistically to student intake questions without disclosing diagnosis directly.
        """

class IntakeSessionManager:
    @staticmethod
    def evaluate_response(session_id, student_question, persona):
        system_prompt = persona.generate_prompt_context()
        response = openai.ChatCompletion.create(
            model="gpt-4-turbo",
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": student_question}
            ],
            temperature=0.7
        )
        return response.choices[0].message.content

# Demo Simulation Call
patient = PatientPersona("Alex", 24, "Social Anxiety & Fatigue", "Guarded")
print(" [PsySim] Clinical Simulation initialized for student diagnostic intake.")
`,
    terminalOutput: [
      '$ python psysim_llm.py',
      '[PsySim] Clinical Simulation initialized for student diagnostic intake.',
      '[Django REST] LLM Agent active on /api/v1/clinical-sim/session-492',
      'Student Question: "How long have you been experiencing difficulty sleeping?"',
      'Virtual Patient (Alex): "It started about three weeks ago when work stress escalated..."'
    ]
  },
  {
    id: 'terraform',
    name: 'aws_infrastructure.tf',
    language: 'hcl',
    iconColor: 'text-purple-400',
    path: 'infrastructure/aws_infrastructure.tf',
    content: `# AWS Infrastructure as Code (Terraform)
# Designed by: Sharan B (Cloud & DevOps Specialist)

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "ap-south-1" # Mumbai AWS Region
}

resource "aws_instance" "sharan_web_server" {
  ami           = "ami-007020e0a4680a651" # Ubuntu 24.04 LTS
  instance_type = "t3.micro"
  key_name      = "sharan-devops-key"

  tags = {
    Name        = "Sharan-Portfolio-Backend"
    Environment = "Production"
    ManagedBy   = "Terraform-CI-CD"
  }
}

resource "aws_s3_bucket" "portfolio_assets" {
  bucket        = "sharan-portfolio-assets-2026"
  force_destroy = true
}

output "instance_public_ip" {
  value       = aws_instance.sharan_web_server.public_ip
  description = "Public IP Address of the Cloud Server"
}
`,
    terminalOutput: [
      '$ terraform plan -out=main.tfplan',
      'Terraform used the selected providers to generate the following execution plan:',
      '  + aws_instance.sharan_web_server (t3.micro in ap-south-1)',
      '  + aws_s3_bucket.portfolio_assets (sharan-portfolio-assets-2026)',
      'Plan: 2 to add, 0 to change, 0 to destroy.',
      '$ terraform apply main.tfplan',
      'Apply complete! Resources: 2 added, 0 changed, 0 destroyed.',
      'Outputs: instance_public_ip = "13.235.48.91"'
    ]
  },
  {
    id: 'profile',
    name: 'sharan_profile.ts',
    language: 'typescript',
    iconColor: 'text-blue-400',
    path: 'src/types/sharan_profile.ts',
    content: `// Developer Profile Configuration & System Specs
// Developer: Sharan B

export interface EngineerProfile {
  name: string;
  degree: string;
  spec: string[];
  coreCompetencies: string[];
  availability: boolean;
}

export const SHARAN_SYSTEM_SPEC: EngineerProfile = {
  name: "Sharan B",
  degree: "B.Tech Artificial Intelligence & Data Science",
  spec: [
    "AWS Cloud Engineering",
    "DevOps & CI/CD Pipelines",
    "Full Stack Web Development",
    "Machine Learning & LLM Integration"
  ],
  coreCompetencies: [
    "Python", "AWS (EC2, S3, IAM)", "Docker", 
    "React.js", "Django", "Firebase", "Linux", "Nginx"
  ],
  availability: true
};

console.log(\`[SYSTEM] Loaded profile for \${SHARAN_SYSTEM_SPEC.name} - Available for hire.\`);
`,
    terminalOutput: [
      '$ npx tsx src/types/sharan_profile.ts',
      '[SYSTEM] Loaded profile for Sharan B - Available for hire.',
      'Competencies Verified: Python (92%), React (88%), AWS (85%), Docker (82%).',
      'Status: Ready to engineer high-impact solutions.'
    ]
  }
];

export const VSCodeSection: React.FC = () => {
  const [activeFileId, setActiveFileId] = useState<string>('agrobot');
  const [copied, setCopied] = useState<boolean>(false);
  const [explorerOpen, setExplorerOpen] = useState<boolean>(true);
  const [terminalRunning, setTerminalRunning] = useState<boolean>(false);
  const [terminalLogs, setTerminalLogs] = useState<string[]>(FILES[0].terminalOutput);

  const activeFile = FILES.find((f) => f.id === activeFileId) || FILES[0];

  const handleSelectFile = (id: string) => {
    setActiveFileId(id);
    const selected = FILES.find((f) => f.id === id);
    if (selected) {
      setTerminalLogs(selected.terminalOutput);
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeFile.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunCode = () => {
    setTerminalRunning(true);
    setTerminalLogs(['Running command in virtual environment...']);
    setTimeout(() => {
      setTerminalLogs(activeFile.terminalOutput);
      setTerminalRunning(false);
    }, 800);
  };

  return (
    <section id="vscode" className="py-20 relative bg-[#050505] overflow-hidden">
      {/* Background Red Ambient Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-radial from-[#E50914]/15 via-transparent to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-[#E50914]/40 text-[#FF1E27] font-orbitron text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#E50914]" />
            <span>INTERACTIVE DEVELOPMENT ENVIRONMENT</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bebas tracking-wider text-white">
            LIVE <span className="text-gradient-text-red">VS CODE WORKSPACE</span>
          </h2>
          <p className="text-slate-400 font-inter text-sm sm:text-base">
            Explore live code snippets from Sharan's AI models, cloud Terraform infrastructure, and backend architecture inside an authentic VS Code interface.
          </p>
        </div>

        {/* VS Code Window Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-xl border border-red-900/50 bg-[#181818] shadow-[0_0_50px_rgba(229,9,20,0.25)] overflow-hidden font-mono"
        >
          {/* Top Title Bar */}
          <div className="h-9 bg-[#1E1E1E] border-b border-[#2B2B2B] px-4 flex items-center justify-between select-none">
            {/* Window Dots */}
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block shadow-sm" />
              <span className="text-xs text-slate-400 ml-3 font-sans hidden sm:inline">
                Sharan_Workspace — VS Code v1.98.0
              </span>
            </div>

            {/* Path text */}
            <div className="text-xs text-slate-400 font-sans hidden md:block">
              {activeFile.path}
            </div>

            {/* Action buttons */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handleRunCode}
                className="px-2.5 py-1 rounded bg-[#E50914] text-white hover:bg-red-600 transition flex items-center space-x-1 text-[11px] font-sans font-semibold"
                title="Run Script in Terminal"
              >
                <Play className="w-3 h-3 fill-current" />
                <span className="hidden sm:inline">RUN CODE</span>
              </button>
              <button
                onClick={handleCopyCode}
                className="px-2.5 py-1 rounded bg-[#2A2A2A] text-slate-300 hover:text-white hover:bg-[#3A3A3A] transition flex items-center space-x-1 text-[11px] font-sans"
                title="Copy Source Code"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span className="hidden sm:inline">{copied ? 'COPIED!' : 'COPY'}</span>
              </button>
            </div>
          </div>

          {/* Main IDE Workspace (Sidebar + Editor Pane) */}
          <div className="grid grid-cols-12 min-h-[460px] bg-[#1E1E1E]">
            
            {/* Left Activity Ribbon (Narrow) */}
            <div className="col-span-1 sm:col-span-1 md:col-span-1 bg-[#181818] border-r border-[#2B2B2B] flex flex-col items-center py-4 space-y-6 text-slate-500">
              <button 
                onClick={() => setExplorerOpen(!explorerOpen)}
                className={`p-2 rounded hover:text-white transition ${explorerOpen ? 'text-[#E50914] bg-[#2A2A2A]' : ''}`}
                title="Explorer"
              >
                <Files className="w-5 h-5" />
              </button>
              <button className="p-2 hover:text-white transition" title="Search">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 hover:text-white transition" title="Source Control">
                <GitBranch className="w-5 h-5" />
              </button>
              <button className="p-2 hover:text-white transition" title="Settings">
                <Sliders className="w-5 h-5" />
              </button>
            </div>

            {/* File Explorer Sidebar */}
            {explorerOpen && (
              <div className="col-span-11 sm:col-span-4 md:col-span-3 bg-[#181818] border-r border-[#2B2B2B] p-3 text-xs font-sans text-slate-300">
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 tracking-wider uppercase mb-2">
                  <span>EXPLORER</span>
                  <span className="text-[10px] text-red-500">PROJECT_FILES</span>
                </div>

                {/* Folder Header */}
                <div className="flex items-center space-x-1 text-slate-200 font-semibold mb-1 py-1 cursor-pointer">
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                  <Folder className="w-4 h-4 text-amber-500 fill-amber-500/20" />
                  <span>sharan-portfolio-core</span>
                </div>

                {/* Files Tree */}
                <div className="pl-4 space-y-1">
                  {FILES.map((file) => {
                    const isActive = file.id === activeFileId;
                    return (
                      <button
                        key={file.id}
                        onClick={() => handleSelectFile(file.id)}
                        className={`w-full text-left flex items-center space-x-2 px-2 py-1.5 rounded transition text-xs ${
                          isActive 
                            ? 'bg-[#E50914]/20 text-white font-semibold border-l-2 border-[#E50914]' 
                            : 'text-slate-400 hover:text-slate-200 hover:bg-[#252525]'
                        }`}
                      >
                        <FileCode className={`w-3.5 h-3.5 ${file.iconColor}`} />
                        <span className="truncate">{file.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Code Editor Body */}
            <div className={`${explorerOpen ? 'col-span-11 sm:col-span-7 md:col-span-8' : 'col-span-11 sm:col-span-11 md:col-span-11'} flex flex-col bg-[#1E1E1E]`}>
              
              {/* File Open Tabs */}
              <div className="flex items-center bg-[#181818] border-b border-[#2B2B2B] overflow-x-auto select-none">
                {FILES.map((file) => {
                  const isActive = file.id === activeFileId;
                  return (
                    <button
                      key={file.id}
                      onClick={() => handleSelectFile(file.id)}
                      className={`px-3 py-2 text-xs font-sans flex items-center space-x-2 border-r border-[#2B2B2B] transition whitespace-nowrap ${
                        isActive
                          ? 'bg-[#1E1E1E] text-white border-t-2 border-t-[#E50914]'
                          : 'text-slate-400 hover:text-slate-200 bg-[#141414]'
                      }`}
                    >
                      <FileCode className={`w-3.5 h-3.5 ${file.iconColor}`} />
                      <span>{file.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Code Scrollable Lines View */}
              <div className="p-4 overflow-x-auto text-xs leading-relaxed font-mono flex-1 bg-[#1E1E1E] max-h-[340px]">
                {activeFile.content.split('\n').map((line, idx) => (
                  <div key={idx} className="flex space-x-4 hover:bg-[#282828]/50 px-1 rounded">
                    <span className="w-6 text-right text-slate-600 select-none text-[11px]">
                      {idx + 1}
                    </span>
                    <pre className="text-slate-200 whitespace-pre font-mono">
                      {highlightSyntax(line, activeFile.language)}
                    </pre>
                  </div>
                ))}
              </div>

              {/* Integrated Terminal Panel (Bottom) */}
              <div className="border-t border-[#2B2B2B] bg-[#141414] p-3 text-xs font-mono">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#252525] text-slate-400 font-sans text-[11px]">
                  <div className="flex items-center space-x-3">
                    <span className="text-white font-semibold flex items-center space-x-1">
                      <Terminal className="w-3.5 h-3.5 text-[#E50914]" />
                      <span>TERMINAL</span>
                    </span>
                    <span>PROBLEMS (0)</span>
                    <span>OUTPUT</span>
                  </div>
                  <button 
                    onClick={handleRunCode}
                    className="text-slate-400 hover:text-white transition flex items-center space-x-1"
                  >
                    <RefreshCw className={`w-3 h-3 ${terminalRunning ? 'animate-spin text-[#E50914]' : ''}`} />
                    <span>Re-Run</span>
                  </button>
                </div>

                <div className="space-y-1 text-slate-300 max-h-28 overflow-y-auto">
                  {terminalLogs.map((log, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      {log.startsWith('$') ? (
                        <span className="text-[#E50914] font-bold">{log}</span>
                      ) : log.includes('SUCCESS') || log.includes('Healthy') || log.includes('complete') ? (
                        <span className="text-emerald-400">{log}</span>
                      ) : log.includes('Plan') ? (
                        <span className="text-amber-300">{log}</span>
                      ) : (
                        <span className="text-slate-300">{log}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Status Bar */}
          <div className="h-6 bg-[#E50914] text-white px-3 flex items-center justify-between text-[11px] font-sans select-none">
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1 font-semibold">
                <GitBranch className="w-3 h-3" />
                <span>main*</span>
              </span>
              <span>0 errors, 0 warnings</span>
            </div>
            <div className="flex items-center space-x-4 text-[10px]">
              <span>UTF-8</span>
              <span>{activeFile.language.toUpperCase()}</span>
              <span>SHARAN_DEV_ENVIRONMENT</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

// Helper function to colorize syntax
function highlightSyntax(line: string, lang: string) {
  if (line.trim().startsWith('#') || line.trim().startsWith('//')) {
    return <span className="text-slate-500 italic">{line}</span>;
  }

  // Python highlighting keywords
    // Python highlighting keywords
  if (lang === 'python') {
    return (
      <span
        dangerouslySetInnerHTML={{
          __html: line
            .replace(
              /\b(def|return|if|else|elif|for|while|import|from|class|in|True|False|None|print)\b/g,
              '<span class="text-purple-400 font-semibold">$1</span>'
            )
            .replace(
              /(".*?"|'.*?')/g,
              '<span class="text-amber-300">$1</span>'
            )
            .replace(
              /\b\d+\.?\d*\b/g,
              '<span class="text-emerald-400">$&</span>'
            ),
        }}
      />
    );
  }

  // TypeScript / JavaScript / HCL highlighting
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: line
          .replace(
            /\b(export|interface|const|let|var|import|from|function|return|class|new|resource|provider|terraform|output|value)\b/g,
            '<span class="text-red-400 font-semibold">$1</span>'
          )
          .replace(
            /(".*?"|'.*?')/g,
            '<span class="text-amber-300">$1</span>'
          )
          .replace(
            /\b\d+\.?\d*\b/g,
            '<span class="text-emerald-400">$&</span>'
          ),
      }}
    />
  );
}