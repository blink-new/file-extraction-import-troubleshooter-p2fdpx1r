package com.example.bulkupload.batch.steps;

import com.example.bulkupload.domain.Skill;
import org.springframework.batch.item.ItemProcessor;

public class SkillItemProcessor implements ItemProcessor<Skill, Skill> {
    @Override
    public Skill process(Skill skill) {
        return (skill.getName() != null && skill.getCategory() != null) ? skill : null;
    }
}