"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Minimize2 } from "lucide-react";
import { Button, Input } from "@/components/ui";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Bonjour ! 👋 Je suis l'assistant CarZone. Comment puis-je vous aider dans votre recherche de pièces automobiles ?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage("");

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Merci pour votre message ! Un conseiller va vous répondre dans les plus brefs délais. En attendant, vous pouvez utiliser notre formulaire de recherche pour nous envoyer votre demande détaillée.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="absolute bottom-20 right-0 w-[360px] max-w-[calc(100vw-3rem)] glass rounded-2xl overflow-hidden shadow-luxury-lg"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-or to-or-light p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-noir-deep/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-noir-deep" />
                </div>
                <div>
                  <h4 className="font-semibold text-noir-deep font-montserrat">
                    Support CarZone
                  </h4>
                  <p className="text-xs text-noir-deep/70">
                    Généralement en ligne
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(true)}
                  className="p-1.5 rounded-full hover:bg-noir-deep/10 transition-colors"
                  aria-label="Minimiser"
                >
                  <Minimize2 className="w-4 h-4 text-noir-deep" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full hover:bg-noir-deep/10 transition-colors"
                  aria-label="Fermer"
                >
                  <X className="w-4 h-4 text-noir-deep" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.sender === "user"
                        ? "bg-or text-noir-deep rounded-tr-sm"
                        : "bg-noir-light text-blanc rounded-tl-sm"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <span
                      className={`text-[10px] ${
                        msg.sender === "user"
                          ? "text-noir-deep/60"
                          : "text-blanc/40"
                      }`}
                    >
                      {msg.timestamp.toLocaleTimeString("fr-FR", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-blanc/10">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Écrivez votre message..."
                  className="flex-1"
                />
                <Button
                  type="submit"
                  variant="primary"
                  size="sm"
                  disabled={!message.trim()}
                  className="!px-4"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Minimized state */}
      <AnimatePresence>
        {isOpen && isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-20 right-0 glass rounded-full px-4 py-2 flex items-center gap-2 cursor-pointer"
            onClick={() => setIsMinimized(false)}
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-blanc">Chat en direct</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => {
          if (isMinimized) {
            setIsMinimized(false);
          } else {
            setIsOpen(!isOpen);
          }
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-16 h-16 rounded-full bg-gradient-to-r from-or to-or-light shadow-luxury flex items-center justify-center group animate-pulse-gold"
        aria-label={isOpen ? "Fermer le chat" : "Ouvrir le chat"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-noir-deep" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6 text-noir-deep" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
