'use client'

import React from "react"
import { PageHeader } from "@/components/page-header"
import { CropDiagnosisForm } from "@/components/forms/crop-diagnosis-form"
import { useTranslation } from "@/hooks/use-translation"

const texts = {
  title: "Crop Diagnosis",
  description: "Upload a photo or provide crop details to diagnose issues.",
}

export default function CropDiagnosisPage() {
  const { t } = useTranslation(texts)

  return (
    <div className="space-y-6 p-6">
      <PageHeader
        title={t("title")}
        description={t("description")}
      />
      <CropDiagnosisForm />
    </div>
  )
}
