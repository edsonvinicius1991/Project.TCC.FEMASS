package com.project.tcc.projecttcc.services;

import org.springframework.stereotype.Service;
import com.project.tcc.projecttcc.repositories.ContainerRepository;

@Service
public class ContainerService {
    
    final ContainerRepository containerRepository;

    public ContainerService(ContainerRepository containerRepository) {
        this.containerRepository = containerRepository;
    }
    
}
