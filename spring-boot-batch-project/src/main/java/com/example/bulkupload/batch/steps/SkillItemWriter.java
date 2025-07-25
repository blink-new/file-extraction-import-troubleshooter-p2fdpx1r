package com.example.bulkupload.batch.steps;

import com.example.bulkupload.domain.Skill;
import com.example.bulkupload.repository.SkillRepository;
import org.springframework.batch.item.ItemWriter;

import java.util.List;

public class SkillItemWriter implements ItemWriter<Skill> {
    private final SkillRepository repository;

    public SkillItemWriter(SkillRepository repository) {
        this.repository = repository;
    }

    @Override
    public void write(List<? extends Skill> items) {
        repository.saveAll(items);
    }
}