"use client"

import { useState } from "react"
import { ToastSave } from "@/components/ui/toast-save"

function ToastSaveDemo() {
  const [state, setState] = useState<"initial" | "loading" | "success">("initial")

  const handleSave = () => {
    setState("loading")
    setTimeout(() => {
      setState("success")
      setTimeout(() => {
        setState("initial")
      }, 2000)
    }, 2000)
  }

  const handleReset = () => {
    setState("initial")
  }

  return (
    <div className="flex items-center justify-center p-6">
      <ToastSave
        state={state}
        onSave={handleSave}
        onReset={handleReset}
      />
    </div>
  )
}

export { ToastSaveDemo }
