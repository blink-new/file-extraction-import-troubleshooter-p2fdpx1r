package com.example.bulkupload.web;

import org.springframework.batch.core.*;
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/skills")
public class UploadController {

    @Autowired private JobLauncher jobLauncher;
    @Autowired private Job skillJob;

    @GetMapping("/trigger")
    public String triggerUpload() throws Exception {
        Map<String, JobParameter> params = new HashMap<>();
        params.put("time", new JobParameter(new Date()));
        JobExecution jobExecution = jobLauncher.run(skillJob, new JobParameters(params));
        return "Job triggered: " + jobExecution.getStatus();
    }
}