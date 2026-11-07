"use client";

import React, { useState } from "react";
import { Shield, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AuthSocialButtons() {
  const [hint, setHint] = useState("");

  const handleSsoClick = (provider) => {
    setHint(
      `${provider} integration is part of the Phase 12 EHR/SSO architecture.`
    );
    setTimeout(() => setHint(""), 4000);
  };

  return (
    <div className="space-y-3">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border/80" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-2.5 text-muted-foreground font-medium tracking-wider">
            Or continue with
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => handleSsoClick("Hospital Enterprise SSO")}
          className="h-10 text-xs font-medium gap-2 justify-center border-border hover:bg-surface-subtle"
        >
          <Building2 className="size-4 text-primary" />
          <span>Hospital SSO</span>
        </Button>

        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => handleSsoClick("Clinical Health Federation")}
          className="h-10 text-xs font-medium gap-2 justify-center border-border hover:bg-surface-subtle"
        >
          <Shield className="size-4 text-emerald-600 dark:text-emerald-400" />
          <span>Health ID Federation</span>
        </Button>
      </div>

      {hint && (
        <p className="text-[11px] text-center text-primary animate-in fade-in duration-200">
          ℹ {hint}
        </p>
      )}
    </div>
  );
}

export default AuthSocialButtons;

