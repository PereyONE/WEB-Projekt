package com.web.organicer.module;

import com.web.organicer.lehrende.Lehrende;
import com.web.organicer.verlaufsplan.Verlaufsplan;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class ModuleService {

    private final ModuleRepository moduleRepository;

    public List<Module> getModules() {
        return moduleRepository.findAll();
    }

    public Module getModulById(Long modulId) {
        return moduleRepository.findById(modulId).get();
    }

    public ArrayList<Lehrende> getLehrendeByModuleId(Long modulId) {
        return new ArrayList<>(getModulById(modulId).getLehrende());
    }

    public String postModule(Module module) {
        if (module.getId() == null) {
            if (moduleRepository.findByModuleName(module.getModuleName()).isPresent()) {
                return "Module " + module.getModuleName() + "existiert bereits";
            }
            return addNewModule(module);
        }
        return updateModule(module);
    }

    public String addNewModule(Module module) {
        moduleRepository.save(module);
        return "Module " + module.getModuleName() + " wurde hinzugefügt";
    }

    public String updateModule(Module module) {
        if (module.getLehrende() != null) {
            module.setLehrende(moduleRepository.findById(module.getId()).get().getLehrende());
            moduleRepository.save(module);
            return "Module " + module.getModuleName() + " wurde aktualisiert";
        }
        moduleRepository.save(module);
        return "Module " + module.getModuleName() + " wurde aktualisiert";
    }

    public String deleteModule(Long id) {
        if (id == null) {
            return "Keine Modul id";
        }
        Module module = moduleRepository.findById(id).get();
        moduleRepository.delete(module);
        return "Module " + module.getModuleName() + " wurde gelöscht";
    }

    public ArrayList<Module> getModuleBySvpModule(ArrayList<Verlaufsplan> verlaufsplan) {
        ArrayList<Module> module = new ArrayList<>();

        for (Verlaufsplan plan : verlaufsplan) {
            module.add(moduleRepository.getByModuleName(plan.getSvpModul().getName()));
        }
        return module;
    }

    public Long getModulByModuleAbkürzung(String moduleAbkürzung) {
        Module module = moduleRepository.getByModuleAbkürzung(moduleAbkürzung);
        return module.getId();
    }
}
