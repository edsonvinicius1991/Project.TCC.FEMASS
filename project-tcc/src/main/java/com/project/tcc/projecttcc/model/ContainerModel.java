package com.project.tcc.projecttcc.model;
import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.*;


@Entity
@Table(name = "TB_CONTAINER")
public class ContainerModel implements Serializable{
    private static final long serialVersionUID = 1L;
    

    @Id
    private String idContainer;
    @Column(nullable = false)
    private LocalDateTime dueDate;
    @Column(nullable = false)
    private String containerType;

    @ManyToOne
    @JoinColumn(name = "idLocation")
    private LocationModel location;
    
}
