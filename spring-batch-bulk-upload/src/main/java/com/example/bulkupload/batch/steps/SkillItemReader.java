package com.example.bulkupload.batch.steps;

import com.example.bulkupload.domain.Skill;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.batch.item.ItemReader;

import java.io.InputStream;
import java.util.Iterator;

public class SkillItemReader implements ItemReader<Skill> {
    private Iterator<Row> rowIterator;

    public SkillItemReader() throws Exception {
        InputStream is = getClass().getResourceAsStream("/data/sample_skills.xlsx");
        Workbook workbook = new XSSFWorkbook(is);
        Sheet sheet = workbook.getSheetAt(0);
        rowIterator = sheet.iterator();
        if (rowIterator.hasNext()) rowIterator.next(); // skip header
    }

    @Override
    public Skill read() {
        if (rowIterator.hasNext()) {
            Row row = rowIterator.next();
            String name = row.getCell(0).getStringCellValue();
            String category = row.getCell(1).getStringCellValue();
            return Skill.builder().name(name).category(category).build();
        }
        return null;
    }
}