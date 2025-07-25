# Spring Batch Bulk Upload Project

This is a Spring Boot application that demonstrates bulk data upload using Spring Batch.

## Features

- Spring Batch for bulk processing
- H2 in-memory database
- REST API for file upload
- Skill entity management
- Job completion listeners

## Getting Started

### Prerequisites

- Java 17 or higher
- Maven 3.6 or higher
- Spring Tool Suite (STS) or any IDE

### Running the Application

1. Import this project into STS:
   - File → Import → Existing Maven Projects
   - Browse to this project folder
   - Click Finish

2. Run the application:
   - Right-click on `BulkuploadApplication.java`
   - Run As → Java Application

3. Access the application:
   - Application will start on `http://localhost:8080`
   - H2 Console: `http://localhost:8080/h2-console`

## Project Structure

```
src/
├── main/
│   ├── java/
│   │   └── com/example/bulkupload/
│   │       ├── BulkuploadApplication.java
│   │       ├── batch/
│   │       │   ├── config/BatchConfig.java
│   │       │   ├── listeners/JobCompletionListener.java
│   │       │   └── steps/
│   │       │       ├── SkillItemProcessor.java
│   │       │       ├── SkillItemReader.java
│   │       │       └── SkillItemWriter.java
│   │       ├── domain/Skill.java
│   │       ├── repository/SkillRepository.java
│   │       └── web/UploadController.java
│   └── resources/
│       └── application.yml
└── test/
    └── java/
```

## API Endpoints

- `POST /upload` - Upload file for batch processing

## Database Configuration

The application uses H2 in-memory database with the following configuration:
- URL: `jdbc:h2:mem:testdb`
- Username: `sa`
- Password: (empty)