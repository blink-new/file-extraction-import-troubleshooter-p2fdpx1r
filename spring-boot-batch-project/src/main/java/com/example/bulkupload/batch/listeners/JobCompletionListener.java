package com.example.bulkupload.batch.listeners;

import org.springframework.batch.core.*;
import org.springframework.stereotype.Component;

@Component
public class JobCompletionListener implements JobExecutionListener {
    @Override
    public void afterJob(JobExecution jobExecution) {
        if (jobExecution.getStatus() == BatchStatus.COMPLETED) {
            System.out.println("Skill upload completed successfully!");
        }
    }
}