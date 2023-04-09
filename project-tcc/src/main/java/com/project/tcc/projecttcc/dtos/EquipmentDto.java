package com.project.tcc.projecttcc.dtos;

import java.time.LocalDateTime;

import javax.validation.constraints.NotBlank;

public class EquipmentDto {
    
    @NotBlank
    private String assetId;
    @NotBlank
    private String description;

    private String partNumber;
    
    private LocalDateTime dueDate;
    
    private String container;
    
    private String location;

    public String getAssetId() {
        return assetId;
    }

    public void setAssetId(String assetId) {
        this.assetId = assetId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPartNumber() {
        return partNumber;
    }

    public void setPartNumber(String partNumber) {
        this.partNumber = partNumber;
    }

    public LocalDateTime getDueDate() {
        return dueDate;
    }

    public void setDueDate(LocalDateTime dueDate) {
        this.dueDate = dueDate;
    }

    public String getContainer() {
        return container;
    }

    public void setContainer(String container) {
        this.container = container;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    
}
