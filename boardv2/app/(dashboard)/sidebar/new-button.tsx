"use client"

import { Plus } from "lucide-react"
import { CreateOrganization } from "@clerk/nextjs"

import {
 Dialog,
 DialogContent,
 DialogTrigger,
} from "@/components/ui/dialog"
import { Hint } from "@/components/hint"

export const NewButton = () => {
    return(
        <Dialog>
            <DialogTrigger asChild>
                <div className="aspect-square">
                    <Hint label="Create organization"
                    side="right"
                    align="start"
                    sideOffset={18}
                    >

                    <button className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition">
                        <Plus className="text-white" />
                    </button>
                    </Hint>
                </div>
            </DialogTrigger>
            <DialogContent className="p-0 bg-transparent border-none max-w-[480px] w-full max-h-[90vh] overflow-y-auto md:max-w-md lg:max-w-lg xl:max-w-xl">
                <div className="p-6 bg-white rounded-lg shadow-lg w-full">
                    <CreateOrganization 
                        afterCreateOrganizationUrl="/dashboard"
                        appearance={{
                            elements: {
                                formButtonPrimary: "w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors",
                                card: "w-full max-w-md mx-auto",
                                formFieldInput: "w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500",
                                formFieldLabel: "text-sm font-medium text-gray-700 mb-1",
                                formFieldLabelIcon: "text-blue-600",
                                formFieldErrorText: "text-red-500 text-xs mt-1",
                                formFieldRequiredText: "text-red-500",
                                footerActionText: "text-blue-600 hover:text-blue-700",
                                footerParagraph: "text-sm text-gray-600",
                                socialButtonsBlockButton: "w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-2 px-4 rounded-md transition-colors",
                                socialButtonsBlockButtonIcon: "text-gray-600",
                            },
                        }}
                    />
                </div>
            </DialogContent>
        </Dialog>
    )
}