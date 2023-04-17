package com.project.tcc.projecttcc.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.tcc.projecttcc.model.LocationModel;

@Repository
public interface LocationRepository extends JpaRepository<LocationModel, String> {
    
}
