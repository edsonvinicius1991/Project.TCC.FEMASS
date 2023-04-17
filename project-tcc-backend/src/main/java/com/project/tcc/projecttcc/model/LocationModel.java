package com.project.tcc.projecttcc.model;

import java.io.Serializable;
import javax.persistence.*;


@Entity
@Table(name = "TB_LOCATION")
public class LocationModel implements Serializable{
    private static final long serialVersionUID = 1L;
    

    @Id
    private String idLocation;
    @Column(nullable = false)
    private String rig;
    @Column(nullable = true)
    private String customer;
    @Column(nullable = true)
    private String well;
    @Column(nullable = true)
    private String country;
    
    public static long getSerialversionuid() {
        return serialVersionUID;
    }
    public String getIdLocation() {
        return idLocation;
    }
    public void setIdLocation(String idLocation) {
        this.idLocation = idLocation;
    }
    public String getRig() {
        return rig;
    }
    public void setRig(String rig) {
        this.rig = rig;
    }
    public String getCustomer() {
        return customer;
    }
    public void setCustomer(String customer) {
        this.customer = customer;
    }
    public String getWell() {
        return well;
    }
    public void setWell(String well) {
        this.well = well;
    }
    public String getCountry() {
        return country;
    }
    public void setCountry(String country) {
        this.country = country;
    }
}








