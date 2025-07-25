import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Alert, AlertDescription } from './components/ui/alert';
import { Badge } from './components/ui/badge';
import { Separator } from './components/ui/separator';
import { CheckCircle, Download, FileArchive, Folder, AlertCircle } from 'lucide-react';

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleDownload = () => {
    // Simple direct download approach
    const link = document.createElement('a');
    link.href = '/spring-boot-batch-project-complete.zip';
    link.download = 'spring-boot-batch-project-complete.zip';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const steps = [
    {
      title: "Download the Complete Project",
      description: "Download the properly structured Spring Boot project with all necessary files",
      icon: <Download className="w-5 h-5" />,
      details: [
        "Click the download button below to get the complete project",
        "The ZIP contains all necessary files: pom.xml, .project, .classpath",
        "All your original Java source code is included",
        "Project is pre-configured for STS/Eclipse import"
      ]
    },
    {
      title: "Extract the ZIP file",
      description: "Extract the downloaded spring-boot-batch-project-complete.zip",
      icon: <FileArchive className="w-5 h-5" />,
      details: [
        "Right-click on spring-boot-batch-project-complete.zip",
        "Select 'Extract All...' or 'Extract Here'",
        "Choose a location like C:\\workspace\\spring-boot-batch-project",
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
      icon: <CheckCircle className="w-5 h-5" />,
      details: [
        "Go to File → Import...",
        "Expand 'General' and select 'Existing Projects into Workspace'",
        "Click 'Next'",
        "Click 'Browse...' next to 'Select root directory'",
        "Navigate to the extracted spring-boot-batch-project folder",
        "Select the project folder (should show spring-batch-bulk-upload)",
        "Make sure the project appears in the Projects list with a checkbox",
        "Click 'Finish'"
      ]
    }
  ];

  const troubleshootingTips = [
    {
      issue: "Project doesn't appear in import dialog",
      solution: "Make sure you extracted the ZIP completely and are selecting the spring-boot-batch-project folder that contains pom.xml"
    },
    {
      issue: "Import fails with errors",
      solution: "Check that you have Java 17+ installed and configured in STS (Window → Preferences → Java → Installed JREs)"
    },
    {
      issue: "Dependencies not downloading",
      solution: "Check your internet connection and Maven settings (Window → Preferences → Maven). Right-click project → Maven → Reload Projects"
    },
    {
      issue: "Project shows errors after import",
      solution: "Right-click project → Maven → Reload Projects or clean and rebuild the project"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Spring Boot Project - Ready for STS Import
          </h1>
          <p className="text-slate-600">
            Complete Spring Boot project with all necessary files for seamless STS import
          </p>
        </div>

        {/* Download Section */}
        <Card className="mb-8 border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-800">
              <CheckCircle className="w-5 h-5" />
              ✅ Project Ready for Download
            </CardTitle>
            <CardDescription className="text-green-700">
              I've created a complete Spring Boot project with all the necessary files for seamless STS import
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-green-700">
                <p className="mb-2"><strong>What's included:</strong></p>
                <ul className="space-y-1 ml-4">
                  <li>• <strong>pom.xml</strong> - Complete Maven configuration with all dependencies</li>
                  <li>• <strong>.project & .classpath</strong> - Eclipse/STS project files</li>
                  <li>• <strong>All source code</strong> - Your original Java classes and batch configuration</li>
                  <li>• <strong>Test files</strong> - Basic test structure</li>
                  <li>• <strong>Application configuration</strong> - application.yml with H2 database setup</li>
                </ul>
              </div>
              <Button
                onClick={handleDownload}
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Complete Project ZIP
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* File Info */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileArchive className="w-5 h-5 text-blue-600" />
              Project Details: spring-batch-bulk-upload
            </CardTitle>
            <CardDescription>
              Spring Boot application with batch processing capabilities for bulk data upload
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Spring Boot 3.2.0</Badge>
              <Badge variant="secondary">Maven Project</Badge>
              <Badge variant="secondary">Spring Batch</Badge>
              <Badge variant="secondary">Java 17</Badge>
              <Badge variant="secondary">H2 Database</Badge>
              <Badge variant="secondary">JPA</Badge>
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
          <p>After import, you can run the application by right-clicking BulkuploadApplication.java → Run As → Java Application</p>
        </div>
      </div>
    </div>
  );
}

export default App;