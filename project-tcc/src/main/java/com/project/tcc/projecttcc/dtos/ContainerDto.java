package com.project.tcc.projecttcc.dtos;

import java.time.LocalDateTime;
import javax.validation.constraints.NotBlank;

import com.project.tcc.projecttcc.model.LocationModel;


public class ContainerDto {

    @NotBlank
    private String idContainer;
    
    private LocalDateTime dueDate;

    private String containerType;

    private LocationModel location;

    public String getIdContainer() {
        return idContainer;
    }

    public void setIdContainer(String idContainer) {
        this.idContainer = idContainer;
    }

    public LocalDateTime getDueDate() {
        return dueDate;
    }

    public void setDueDate(LocalDateTime dueDate) {
        this.dueDate = dueDate;
    }

    public String getContainerType() {
        return containerType;
    }

    public void setContainerType(String containerType) {
        this.containerType = containerType;
    }

    public LocationModel getLocation() {
        return location;
    }

    public void setLocation(LocationModel location) {
        this.location = location;
    }
    
}
