package com.example.bulkupload.batch.config;

import com.example.bulkupload.batch.steps.*;
import com.example.bulkupload.domain.Skill;
import com.example.bulkupload.repository.SkillRepository;
import org.springframework.batch.core.*;
import org.springframework.batch.core.configuration.annotation.*;
import org.springframework.batch.core.step.builder.StepBuilderFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.*;

@Configuration
@EnableBatchProcessing
public class BatchConfig {

    @Autowired private JobBuilderFactory jobBuilderFactory;
    @Autowired private StepBuilderFactory stepBuilderFactory;
    @Autowired private SkillRepository skillRepository;

    @Bean
    public Job skillJob(JobCompletionListener listener) throws Exception {
        return jobBuilderFactory.get("skillJob")
                .listener(listener)
                .flow(skillStep())
                .end()
                .build();
    }

    @Bean
    public Step skillStep() throws Exception {
        return stepBuilderFactory.get("skillStep")
                .<Skill, Skill>chunk(100)
                .reader(new SkillItemReader())
                .processor(new SkillItemProcessor())
                .writer(new SkillItemWriter(skillRepository))
                .build();
    }
}