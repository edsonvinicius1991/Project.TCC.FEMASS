package com.project.tcc.projecttcc.model;

import java.io.Serializable;
import java.time.LocalDateTime;
//import java.util.UUID;
import javax.persistence.*;


@Entity
@Table(name = "TB_EQUIPMENT")
public class EquipmentModel implements Serializable{
    private static final long serialVersionUID = 1L;

    @Id
    private String assetId;
    @Column(nullable = false)
    private String description;
    @Column(nullable = false, length = 70)
    private String partNumber;
    @Column(nullable = true)
    private LocalDateTime dueDate;
    @Column(nullable = true, length = 130) 
    private String container;
    @Column(nullable = true, length = 70)
    private String location;
    
    public static long getSerialversionuid() {
        return serialVersionUID;
    }

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
    public void setContainer(String idContainer) {
        this.container = idContainer;
    }
    public String getLocation() {
        return location;
    }
    public void setLocation(String idLocation) {
        this.location = idLocation;
    }
    
    

}
