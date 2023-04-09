package com.project.tcc.projecttcc.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.tcc.projecttcc.services.ContainerService;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/container")

public class ContainerController {
    
    final ContainerService containerService;

    public ContainerController(ContainerService containerService) {
        this.containerService = containerService;
    }

    
}
