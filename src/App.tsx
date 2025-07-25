import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Alert, AlertDescription } from './components/ui/alert';
import { Badge } from './components/ui/badge';
import { Separator } from './components/ui/separator';
import { CheckCircle, Download, FileArchive, Folder, AlertCircle } from 'lucide-react';

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Extract the ZIP file",
      description: "First, extract your spring-batch-bulk-upload.zip to a folder on your computer",
      icon: <FileArchive className="w-5 h-5" />,
      details: [
        "Right-click on spring-batch-bulk-upload.zip",
        "Select 'Extract All...' or 'Extract Here'",
        "Choose a location like C:\\workspace\\spring-batch-bulk-upload",
        "Make sure all files are extracted properly"
      ]
    },
    {
      title: "Open STS (Spring Tool Suite)",
      description: "Launch your Spring Tool Suite IDE",
      icon: <Folder className="w-5 h-5" />,
      details: [
        "Start Spring Tool Suite from your desktop or start menu",
        "Wait for STS to fully load",
        "If prompted, select or create a workspace directory"
      ]
    },
    {
      title: "Import the Project",
      description: "Import the extracted Spring Boot project into STS",
      icon: <Download className="w-5 h-5" />,
      details: [
        "Go to File → Import...",
        "Expand 'General' and select 'Existing Projects into Workspace'",
        "Click 'Next'",
        "Click 'Browse...' next to 'Select root directory'",
        "Navigate to where you extracted the ZIP file",
        "Select the spring-batch-bulk-upload folder",
        "Make sure the project appears in the Projects list with a checkbox",
        "Click 'Finish'"
      ]
    },
    {
      title: "Wait for Project Setup",
      description: "Let STS configure the project automatically",
      icon: <CheckCircle className="w-5 h-5" />,
      details: [
        "STS will automatically detect it's a Maven/Gradle project",
        "Dependencies will be downloaded automatically",
        "Wait for the progress bar in the bottom-right to complete",
        "The project should appear in your Project Explorer"
      ]
    }
  ];

  const troubleshootingTips = [
    {
      issue: "Project doesn't appear in import dialog",
      solution: "Make sure you extracted the ZIP completely and are selecting the root folder containing pom.xml or build.gradle"
    },
    {
      issue: "Import fails with errors",
      solution: "Check that you have Java 8+ installed and configured in STS (Window → Preferences → Java → Installed JREs)"
    },
    {
      issue: "Dependencies not downloading",
      solution: "Check your internet connection and Maven/Gradle settings (Window → Preferences → Maven or Gradle)"
    },
    {
      issue: "Project shows errors after import",
      solution: "Right-click project → Maven → Reload Projects or Gradle → Refresh Gradle Project"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Import Spring Boot Project into STS
          </h1>
          <p className="text-slate-600">
            Step-by-step guide to import your spring-batch-bulk-upload.zip into Spring Tool Suite
          </p>
        </div>

        {/* File Info */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileArchive className="w-5 h-5 text-blue-600" />
              Your File: spring-batch-bulk-upload.zip
            </CardTitle>
            <CardDescription>
              This appears to be a Spring Boot project with batch processing capabilities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Spring Boot</Badge>
              <Badge variant="secondary">Maven Project</Badge>
              <Badge variant="secondary">Batch Processing</Badge>
              <Badge variant="secondary">Java</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Steps */}
        <div className="space-y-6 mb-8">
          {steps.map((step, index) => (
            <Card key={index} className={`transition-all duration-200 ${
              currentStep === index ? 'ring-2 ring-blue-500 shadow-lg' : ''
            }`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${
                    currentStep > index ? 'bg-green-100 text-green-600' :
                    currentStep === index ? 'bg-blue-100 text-blue-600' :
                    'bg-slate-100 text-slate-400'
                  }`}>
                    {currentStep > index ? <CheckCircle className="w-5 h-5" /> : step.icon}
                  </div>
                  <span className="text-lg">Step {index + 1}: {step.title}</span>
                  {currentStep > index && (
                    <Badge variant="default" className="bg-green-100 text-green-800">
                      Completed
                    </Badge>
                  )}
                </CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">{detail}</span>
                    </li>
                  ))}
                </ul>
                {currentStep === index && (
                  <Button 
                    onClick={() => setCurrentStep(index + 1)}
                    className="mt-4"
                    disabled={index === steps.length - 1}
                  >
                    {index === steps.length - 1 ? 'Import Complete!' : 'Mark as Complete'}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Troubleshooting */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600" />
              Troubleshooting Common Issues
            </CardTitle>
            <CardDescription>
              If you encounter problems during import, try these solutions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {troubleshootingTips.map((tip, index) => (
                <div key={index}>
                  <Alert>
                    <AlertDescription>
                      <div className="space-y-2">
                        <p className="font-medium text-slate-900">
                          Problem: {tip.issue}
                        </p>
                        <p className="text-slate-700">
                          Solution: {tip.solution}
                        </p>
                      </div>
                    </AlertDescription>
                  </Alert>
                  {index < troubleshootingTips.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-slate-500">
          <p>Need more help? Check STS documentation or Spring Boot guides online.</p>
        </div>
      </div>
    </div>
  );
}

export default App;