import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ShieldAlert, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  type?: 'success' | 'error';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  if (!message) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 max-w-md bg-[#0A0A0F] border-2 border-[#E50914] p-4 rounded-xl shadow-[0_0_30px_rgba(229,9,20,0.5)] flex items-center justify-between space-x-4 hud-corner-tl hud-corner-br"
      >
        <div className="flex items-center space-x-3">
          {type === 'success' ? (
            <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
          ) : (
            <ShieldAlert className="w-6 h-6 text-[#E50914] shrink-0" />
          )}
          <div>
            <h4 className="text-xs font-orbitron font-bold text-white uppercase">
              {type === 'success' ? 'TRANSMISSION SENT' : 'SYSTEM ALERT'}
            </h4>
            <p className="text-xs font-inter text-slate-300 mt-0.5">{message}</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white p-1 rounded"
        >
          <X className="w-4 h-4" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
