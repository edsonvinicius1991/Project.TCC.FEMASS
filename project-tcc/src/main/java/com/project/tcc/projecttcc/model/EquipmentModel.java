package com.project.tcc.projecttcc.model;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.UUID;
import javax.persistence.*;


@Entity
@Table(name = "TB_EQUIPMENT")
public class EquipmentModel implements Serializable{
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    @Column(nullable = false, unique = true, length = 10)
    private String assetId;
    @Column(nullable = false, unique = true, length = 7)
    private String description;
    @Column(nullable = false, length = 70)
    private String partNumber;
    @Column(nullable = false, length = 70)
    private LocalDateTime dueDate;
    @Column(nullable = false, length = 130) 
    private String idContainer;
    @Column(nullable = false, length = 70)
    private String idLocation;
    public static long getSerialversionuid() {
        return serialVersionUID;
    }
    public UUID getId() {
        return id;
    }
    public void setId(UUID id) {
        this.id = id;
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
    public String getIdContainer() {
        return idContainer;
    }
    public void setIdContainer(String idContainer) {
        this.idContainer = idContainer;
    }
    public String getIdLocation() {
        return idLocation;
    }
    public void setIdLocation(String idLocation) {
        this.idLocation = idLocation;
    }
    
    

}
