package com.project.tcc.projecttcc.dtos;

import javax.validation.constraints.NotBlank;


public class LocationDto {

    @NotBlank
    private String idLocation;

    private String rig;

    public String customer;

    public String country;

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

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }
    

}
