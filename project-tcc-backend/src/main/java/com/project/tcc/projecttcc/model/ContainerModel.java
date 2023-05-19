package com.project.tcc.projecttcc.model;
import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.*;


@Entity
@Table(name = "TB_CONTAINER")
public class ContainerModel implements Serializable{
    private static final long serialVersionUID = 1L;
    

    @Id
    private String idContainer;
    @Column(nullable = true)
    private LocalDate dueDate;
    @Column(nullable = true)
    private String containerType;

    @ManyToOne
    @JoinColumn(name = "idLocation")
    private LocationModel location;

    public static long getSerialversionuid() {
        return serialVersionUID;
    }

    public String getIdContainer() {
        return idContainer;
    }

    public void setIdContainer(String idContainer) {
        this.idContainer = idContainer;
    }

    public LocalDate getDueDate() {
        return dueDate;
    }

    public void setDueDate(LocalDate dueDate) {
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
