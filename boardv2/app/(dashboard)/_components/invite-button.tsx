"use client";

import { Plus, X } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useTheme } from 'next-themes';



export const InviteButton = () => {
    // useTheme returns "light" | "dark" | "system"
    const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        <Plus className="h-4 w-4 mr-2" />
        Invite members
      </Button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-2 sm:p-4 md:p-6">
          <div className="relative w-full h-full max-w-6xl max-h-[95vh] overflow-hidden">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="
                absolute top-2 right-2 sm:top-4 sm:right-4 z-50
                p-2 rounded-full bg-white/10 backdrop-blur-sm
                hover:bg-white/20 transition-colors
                focus:outline-none focus:ring-2 focus:ring-blue-500
                border border-white/20
              "
              aria-label="Close modal"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </button>

            {/* ORGANIZATION CONTAINER - RESPONSIVE WITH TRANSPARENT BACKGROUND */}
            <div className="
              w-full h-full 
              bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-lg
              rounded-lg md:rounded-xl lg:rounded-2xl
              overflow-y-auto overflow-x-hidden
              flex flex-col
              border border-gray-700/50
              shadow-2xl
            ">
              {/* CLERK UI - CUSTOMIZED FOR BOTH SCREENS */}
              <OrganizationProfile 
                routing="hash"
                appearance={{
                  baseTheme: isMobile ? undefined : "dark",
                  elements: {
                    rootBox: "w-full h-full flex-1 bg-transparent",
                    card: `
                      shadow-none border-none rounded-none 
                      w-full h-full flex flex-col bg-transparent
                    `,
                    navbar: `
                      flex-shrink-0 
                      border-b border-gray-700/50
                      bg-transparent
                      ${isMobile ? 'px-2 py-3' : 'px-6 py-4'}
                    `,
                    scrollBox: "flex-1 overflow-auto bg-transparent",
                    header: "bg-transparent",
                    headerTitle: `
                      ${isMobile ? 'text-lg' : 'text-2xl'}
                      font-semibold text-white
                    `,
                    headerSubtitle: "text-gray-300",
                    organizationProfile__members: "bg-transparent",
                    table: "bg-transparent",
                    tableHead: "bg-gray-800/30",
                    tableHeader: `
                      ${isMobile ? 'px-2 py-3 text-xs' : 'px-4 py-3'}
                      text-gray-300 font-medium
                    `,
                    tableRow: `
                      border-b border-gray-700/30 
                      hover:bg-gray-800/20 transition-colors
                    `,
                    tableCell: `
                      ${isMobile ? 'px-2 py-3 text-sm' : 'px-4 py-3'}
                      text-white
                    `,
                    badge: "bg-blue-500/20 text-blue-300 border-blue-500/30",
                    pagination: "bg-transparent border-t border-gray-700/50",
                    searchInput: `
                      bg-gray-800/30 border-gray-600/50 
                      text-white placeholder-gray-400
                      focus:border-blue-500/50
                      ${isMobile ? 'text-sm' : ''}
                    `,
                    footer: "bg-transparent border-t border-gray-700/50",
                    footerAction: "text-gray-300 hover:text-white",
                    formButtonPrimary: `
                      bg-blue-600 hover:bg-blue-700 
                      ${isMobile ? 'text-sm px-3 py-2' : ''}
                    `,
                    formButtonReset: `
                      text-gray-300 hover:text-white
                      ${isMobile ? 'text-sm' : ''}
                    `,
                    avatarBox: "w-8 h-8 sm:w-10 sm:h-10",
                    userPreviewMainIdentifier: "text-white",
                    userPreviewSecondaryIdentifier: "text-gray-400",
                  },
                  variables: {
                    colorBackground: 'transparent',
                    colorText: '#ffffff',
                    colorPrimary: '#3b82f6',
                    colorTextSecondary: '#9ca3af',
                    colorInputBackground: 'rgba(31, 41, 55, 0.3)',
                    colorInputText: '#ffffff',
                    borderRadius: '0.5rem',
                  }
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
