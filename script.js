// Datos de las materias basados en la malla curricular
const subjects = {
    // PRIMER SEMESTRE
    'INF-111': { name: 'Programación I', semester: 1, prereqs: [], status: 'available' },
    'INF-112': { name: 'Fundamentos digitales', semester: 1, prereqs: [], status: 'available' },
    'INF-113': { name: 'Programación web I', semester: 1, prereqs: [], status: 'available' },
    'INF-114': { name: 'Álgebra', semester: 1, prereqs: [], status: 'available' },
    'INF-115': { name: 'Cálculo I', semester: 1, prereqs: [], status: 'available' },
    'INF-116': { name: 'Física', semester: 1, prereqs: [], status: 'available' },

    // SEGUNDO SEMESTRE
    'INF-121': { name: 'Programación II', semester: 2, prereqs: ['INF-111'], status: 'blocked' },
    'INF-122': { name: 'Programación web II', semester: 2, prereqs: ['INF-113'], status: 'blocked' },
    'INF-123': { name: 'Electrónica general I', semester: 2, prereqs: ['INF-112', 'INF-116'], status: 'blocked' },
    'INF-124': { name: 'Estadística I', semester: 2, prereqs: ['INF-114'], status: 'blocked' },
    'INF-125': { name: 'Álgebra lineal', semester: 2, prereqs: ['INF-114'], status: 'blocked' },
    'INF-126': { name: 'Cálculo II', semester: 2, prereqs: ['INF-115'], status: 'blocked' },

    // TERCER SEMESTRE
    'INF-131': { name: 'Programación III', semester: 3, prereqs: ['INF-121'], status: 'blocked' },
    'INF-132': { name: 'Base de datos I', semester: 3, prereqs: ['INF-121'], status: 'blocked' },
    'INF-133': { name: 'Programación web III', semester: 3, prereqs: ['INF-111', 'INF-122'], status: 'blocked' },
    'INF-134': { name: 'Estadística II', semester: 3, prereqs: ['INF-124'], status: 'blocked' },
    'INF-135': { name: 'Sistemas Operativos', semester: 3, prereqs: ['INF-121'], status: 'blocked' },
    'TRA-136': { name: 'Metodología de la investigación', semester: 3, prereqs: ['INF-124', 'INF-125'], status: 'blocked' },

    // CUARTO SEMESTRE
    'INF-241': { name: 'Análisis y diseño de sistemas I', semester: 4, prereqs: ['INF-132'], status: 'blocked' },
    'INF-242': { name: 'Redes I', semester: 4, prereqs: ['INF-135'], status: 'blocked' },
    'INF-243': { name: 'Investigación Operativa I', semester: 4, prereqs: ['INF-134'], status: 'blocked' },
    'INF-244': { name: 'Introducción a la Robótica', semester: 4, prereqs: ['INF-123', 'INF-124'], status: 'blocked' },
    'INF-245': { name: 'Programación de dispositivos móviles I', semester: 4, prereqs: ['INF-131', 'INF-133'], status: 'blocked' },
    'INF-246': { name: 'Fundamentos de diseño y animación', semester: 4, prereqs: ['INF-125', 'INF-133'], status: 'blocked' },

    // QUINTO SEMESTRE
    'INF-251': { name: 'Programación de dispositivos móviles II', semester: 5, prereqs: ['INF-245'], status: 'blocked' },
    'INF-252': { name: 'Base de datos II', semester: 5, prereqs: ['INF-132'], status: 'blocked' },
    'INF-253': { name: 'Análisis y diseño de sistemas II', semester: 5, prereqs: ['INF-241'], status: 'blocked' },
    'INF-254': { name: 'Ingeniería de Software I', semester: 5, prereqs: ['INF-241'], status: 'blocked' },
    'TRA-256': { name: 'Legislación informática y ética', semester: 5, prereqs: [], status: 'blocked', prereq_text: 'Tercer semestre vencido' },
    'TVD-251': { name: 'Electiva I. Programación gráfica', semester: 5, prereqs: ['INF-246'], status: 'blocked' },

    // SEXTO SEMESTRE
    'INF-261': { name: 'Base de Datos III', semester: 6, prereqs: ['INF-252'], status: 'blocked' },
    'INF-262': { name: 'Ingeniería de Software II', semester: 6, prereqs: ['INF-254'], status: 'blocked' },
    'INF-263': { name: 'Desarrollo de aplicaciones multimedia', semester: 6, prereqs: ['INF-246'], status: 'blocked' },
    'INF-264': { name: 'Emprendimiento e innovación tecnológica', semester: 6, prereqs: ['TRA-256'], status: 'blocked' }, // Corrected prereq
    'TVD-261': { name: 'Electiva II. Animación digital 2D y 3D', semester: 6, prereqs: ['TVD-251'], status: 'blocked' },
    'TVD-262': { name: 'Electiva III. Taller de Técnico Superior: Desarrollo de Video Juegos', semester: 6, prereqs: [], status: 'blocked', prereq_text: 'Quinto semestre vencido' },

    // SÉPTIMO SEMESTRE
    'INF-371': { name: 'Seguridad de la información', semester: 7, prereqs: ['INF-242'], status: 'blocked' },
    'INF-372': { name: 'Inteligencia Artificial', semester: 7, prereqs: ['INF-261'], status: 'blocked' },
    'INF-373': { name: 'Métodos numéricos I', semester: 7, prereqs: ['INF-125'], status: 'blocked' },
    'TRA-374': { name: 'Práctica profesional', semester: 7, prereqs: [], status: 'blocked',prereq_text: 'Quinto semestre vencido' },

    // OCTAVO SEMESTRE
    'INF-381': { name: 'Simulación de sistemas', semester: 8, prereqs: ['INF-243'], status: 'blocked' },
    'INF-382': { name: 'Ingeniería de software III', semester: 8, prereqs: ['INF-262'], status: 'blocked' },
    'INF-383': { name: 'Taller de graduación I', semester: 8, prereqs: [], status: 'blocked', prereq_text: 'Sexto semestre vencido' },

    // NOVENO SEMESTRE
    'INF-391': { name: 'Taller de graduación II', semester: 9, prereqs: [], status: 'blocked', prereq_text: 'Octavo semestre vencido' },

    // MATERIAS ELECTIVAS (Generales)
    'INF-311': { name: 'Realidad aumentada y virtual', semester: 'electiva', prereqs: [], status: 'blocked',prereq_text: 'Sexto semestre vencido' },
    'INF-312': { name: 'Minería de datos', semester: 'electiva', prereqs: [], status: 'blocked',prereq_text: 'Sexto semestre vencido' },
    'INF-313': { name: 'Bioinformática', semester: 'electiva', prereqs: [], status: 'blocked',prereq_text: 'Sexto semestre vencido' },
    'INF-314': { name: 'Informática Forense', semester: 'electiva', prereqs: [], status: 'blocked',prereq_text: 'Sexto semestre vencido' },
    'INF-315': { name: 'Internet de las cosas', semester: 'electiva', prereqs: [], status: 'blocked',prereq_text: 'Sexto semestre vencido' },
    'INF-316': { name: 'Auditoría de sistemas', semester: 'electiva', prereqs: [], status: 'blocked',prereq_text: 'Sexto semestre vencido' },
    'INF-317': { name: 'Preparación y evaluación de proyectos', semester: 'electiva', prereqs: [], status: 'blocked',prereq_text: 'Sexto semestre vencido' },
    'INF-318': { name: 'Aprendizaje automático Machine Learning', semester: 'electiva', prereqs: [], status: 'blocked',prereq_text: 'Sexto semestre vencido' },
    'INF-319': { name: 'Aprendizaje Profundo (Deep learning)', semester: 'electiva', prereqs: [], status: 'blocked',prereq_text: 'Sexto semestre vencido' },
    'INF-320': { name: 'Programación a bajo nivel', semester: 'electiva', prereqs: [], status: 'blocked',prereq_text: 'Sexto semestre vencido' },
    'INF-321': { name: 'Cálculo III', semester: 'electiva', prereqs: [], status: 'blocked',prereq_text: 'Sexto semestre vencido' },
    'INF-322': { name: 'Macrodatos y analítica de datos (Big Data)', semester: 'electiva', prereqs: [], status: 'blocked',prereq_text: 'Sexto semestre vencido' },
    'INF-323': { name: 'Derecho informático', semester: 'electiva', prereqs: [], status: 'blocked',prereq_text: 'Sexto semestre vencido' },
    'INF-324': { name: 'Visión por computadora', semester: 'electiva', prereqs: [], status: 'blocked',prereq_text: 'Sexto semestre vencido' },
    'INF-325': { name: 'Procesamiento digital de imágenes', semester: 'electiva', prereqs: [], status: 'blocked',prereq_text: 'Sexto semestre vencido' },
    'INF-326': { name: 'Negociaciones y Toma de Decisiones', semester: 'electiva', prereqs: [], status: 'blocked',prereq_text: 'Sexto semestre vencido' },
    'INF-327': { name: 'Informática Médica', semester: 'electiva', prereqs: [], status: 'blocked',prereq_text: 'Sexto semestre vencido' },
    'INF-328': { name: 'Investigación Operativa II', semester: 'electiva', prereqs: [], status: 'blocked',prereq_text: 'Sexto semestre vencido' },
    'INF-329': { name: 'Hacking ético I', semester: 'electiva', prereqs: [], status: 'blocked',prereq_text: 'Sexto semestre vencido' },
    'INF-330': { name: 'Redes II', semester: 'electiva', prereqs: [], status: 'blocked',prereq_text: 'Sexto semestre vencido' },
    'INF-331': { name: 'Computación en la nube', semester: 'electiva', prereqs: [], status: 'blocked',prereq_text: 'Sexto semestre vencido' },
    'INF-332': { name: 'Dirección de proyectos informáticos', semester: 'electiva', prereqs: [], status: 'blocked',prereq_text: 'Sexto semestre vencido' },
    'INF-333': { name: 'Inteligencia de negocios (Business Intelligence)', semester: 'electiva', prereqs: [], status: 'blocked',prereq_text: 'Sexto semestre vencido' },
    'INF-334': { name: 'Inglés técnico', semester: 'electiva', prereqs: [], status: 'blocked',prereq_text: 'Sexto semestre vencido' },

};

// Deep copy of the initial state for resetting
const initialSubjectsState = JSON.parse(JSON.stringify(subjects));

let currentView = 'semester';
let currentFilter = 'all';

// --- Theme Toggle Global Variables ---
let isDarkMode = false; // Initial state, will be updated from localStorage
const body = document.getElementById('body');
const themeToggleBtn = document.getElementById('themeToggle');

// --- Notification Function ---
function showNotification(message, type) {
    let notification = document.getElementById('notification');
    if (!notification) {
        // Create notification div if it doesn't exist
        const newNotification = document.createElement('div');
        newNotification.id = 'notification';
        document.body.appendChild(newNotification);
        notification = newNotification;
    }

    notification.textContent = message;
    notification.className = `notification ${type}`; // Apply type class (success, error, info)
    notification.classList.add('show');

    // Hide after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Cargar datos guardados
function loadSavedData() {
    const savedData = localStorage.getItem('mallaProgress');
    if (savedData) {
        const data = JSON.parse(savedData);
        for (const [code, subject] of Object.entries(data)) {
            if (subjects[code]) { // Asegurarse de que la materia exista en la estructura actual
                subjects[code].status = subject.status || 'blocked';
                subjects[code].grade = subject.grade || null;
                subjects[code].notes = subject.notes || '';
            }
        }
    }
}

// Guardar datos
function saveData() {
    const dataToSave = {};
    for (const [code, subject] of Object.entries(subjects)) {
        dataToSave[code] = {
            status: subject.status,
            grade: subject.grade,
            notes: subject.notes
        };
    }
    localStorage.setItem('mallaProgress', JSON.stringify(dataToSave));
}

// Actualizar estadísticas
function updateStats() {
    const total = Object.keys(subjects).length;
    const completed = Object.values(subjects).filter(s => s.status === 'completed').length;
    const current = Object.values(subjects).filter(s => s.status === 'current').length;
    const available = Object.values(subjects).filter(s => s.status === 'available').length;
    const progress = Math.round((completed / total) * 100);

    document.getElementById('totalSubjects').textContent = total;
    document.getElementById('completedSubjects').textContent = completed;
    document.getElementById('currentSubjects').textContent = current;
    document.getElementById('availableSubjects').textContent = available;
    document.getElementById('progressPercentage').textContent = progress + '%';
}

// Actualizar estado de prerequisitos
function updatePrerequisites() {
    // Flag to track if any status changed, prompting a re-evaluation
    let statusChanged = false;

    // Loop until no more status changes occur due to prerequisite fulfillment
    do {
        statusChanged = false;
        for (const [code, subject] of Object.entries(subjects)) {
            // Skip if already completed or current, as these states are typically user-set
            if (subject.status === 'completed' || subject.status === 'current') {
                continue;
            }

            let canBeAvailable = false;

            // Handle special 'semester completed' prerequisites
            if (subject.prereq_text === 'Tercer semestre vencido' && code === 'TRA-256') {
                let allThirdSemesterCompleted = true;
                for (const subCode in subjects) {
                    const sub = subjects[subCode];
                    if (sub.semester === 3 && sub.status !== 'completed') {
                        allThirdSemesterCompleted = false;
                        break;
                    }
                }
                canBeAvailable = allThirdSemesterCompleted;
            } else if (subject.prereq_text === 'Quinto semestre vencido' && code === 'TVD-262') {
                let allFifthSemesterCompleted = true;
                for (const subCode in subjects) {
                    const sub = subjects[subCode];
                    if (sub.semester === 5 && sub.status !== 'completed') {
                        allFifthSemesterCompleted = false;
                        break;
                    }
                }
                canBeAvailable = allFifthSemesterCompleted;
            } else if (subject.prereqs && subject.prereqs.length > 0) {
                // Handle regular prerequisites
                canBeAvailable = subject.prereqs.every(prereq =>
                    subjects[prereq] && subjects[prereq].status === 'completed'
                );
            } else if (subject.prereqs.length === 0 && !subject.prereq_text) {
                // If no prerequisites and no special text, it should be available by default
                canBeAvailable = true;
            }

            // Apply status change based on eligibility
            if (canBeAvailable && subject.status === 'blocked') {
                subject.status = 'available';
                statusChanged = true; // Mark that a change occurred
            } else if (!canBeAvailable && subject.status === 'available') {
                // Only block if it was available and now prerequisites are not met
                subject.status = 'blocked';
                statusChanged = true; // Mark that a change occurred
            }
        }
    } while (statusChanged); // Continue looping if any status changed in the last iteration
}


// Cambiar estado de materia
function toggleSubjectStatus(code) {
    const subject = subjects[code];
    const statusOrder = ['available', 'current', 'completed', 'blocked'];
    const currentIndex = statusOrder.indexOf(subject.status);
    let nextIndex = (currentIndex + 1) % statusOrder.length;

    // Prevent direct change from completed to blocked/available/current without checking dependencies
    if (subject.status === 'completed' && (statusOrder[nextIndex] === 'blocked' || statusOrder[nextIndex] === 'available' || statusOrder[nextIndex] === 'current')) {
        const dependentSubjectsCompleted = Object.entries(subjects).filter(([subCode, sub]) =>
            sub.prereqs.includes(code) && sub.status === 'completed'
        );
        if (dependentSubjectsCompleted.length > 0) {
            showNotification(`No puedes desmarcar "${subject.name}" porque otras materias completadas dependen de ella.`, 'error');
            return;
        }
    }

    // Determine the *next* status based on the current status and rules
    let newStatus = statusOrder[nextIndex];

    // If the subject is currently blocked, it can only move to 'available' if prerequisites are met
    // Or if it has no prerequisites (already handled by updatePrerequisites to become 'available')
    if (subject.status === 'blocked') {
        let prereqsMet = false;
        if (subject.prereq_text === 'Tercer semestre vencido' && code === 'TRA-256') {
            let allThirdSemesterCompleted = true;
            for (const subCode in subjects) {
                const sub = subjects[subCode];
                if (sub.semester === 3 && sub.status !== 'completed') {
                    allThirdSemesterCompleted = false;
                    break;
                }
            }
            prereqsMet = allThirdSemesterCompleted;
        } else if (subject.prereq_text === 'Quinto semestre vencido' && code === 'TVD-262') {
            let allFifthSemesterCompleted = true;
            for (const subCode in subjects) {
                const sub = subjects[subCode];
                if (sub.semester === 5 && sub.status !== 'completed') {
                    allFifthSemesterCompleted = false;
                    break;
                }
            }
            prereqsMet = allFifthSemesterCompleted;
        } else if (subject.prereqs && subject.prereqs.length > 0) {
            prereqsMet = subject.prereqs.every(prereq =>
                subjects[prereq] && subjects[prereq].status === 'completed'
            );
        } else if (subject.prereqs.length === 0 && !subject.prereq_text) {
            prereqsMet = true; // No prerequisites, so it's always "met"
        }


        if (!prereqsMet && (newStatus === 'available' || newStatus === 'current' || newStatus === 'completed')) {
            showNotification(`No puedes marcar "${subject.name}" como ${getStatusText(newStatus)}. Prerequisitos no completados.`, 'error');
            return;
        }
    }

    subject.status = newStatus;

    updatePrerequisites(); // Recalculate all prerequisite-based statuses
    renderMalla();
    updateStats();
    saveData();

    showNotification(`${subject.name} marcada como ${getStatusText(subject.status)}`, 'success');
}

// Obtener texto del estado
function getStatusText(status) {
    const statusTexts = {
        'completed': 'Completada',
        'current': 'Actual',
        'available': 'Disponible',
        'blocked': 'Bloqueada'
    };
    return statusTexts[status] || 'Desconocido';
}

// Crear elemento de materia
function createSubjectElement(code, subject) {
    const subjectDiv = document.createElement('div');
    subjectDiv.className = `subject ${subject.status}`;
    subjectDiv.onclick = (e) => {
        // Only toggle status if it's a left-click
        if (e.button === 0) {
            toggleSubjectStatus(code);
        }
    };
    subjectDiv.oncontextmenu = (e) => {
        e.preventDefault(); // Prevent the default context menu
        openSubjectModal(code, subject);
    };

    const prereqsDisplay = (subject.prereqs && subject.prereqs.length > 0)
        ? `Prerequisitos: ${subject.prereqs.map(p => subjects[p] ? subjects[p].name : p).join(', ')}`
        : (subject.prereq_text || 'Sin prerequisitos'); // Show prereq_text if it exists

    subjectDiv.innerHTML = `
        <div class="subject-code">${code}</div>
        <div class="subject-name">${subject.name}</div>
        <div class="subject-prereqs">${prereqsDisplay}</div>
        <div class="subject-status">
            <span class="status-badge ${subject.status}">${getStatusText(subject.status)}</span>
            ${subject.grade ? `<span style="font-size: 0.8em; color: ${isDarkMode ? '#b0b0b0' : '#666'};">Nota: ${subject.grade}</span>` : ''}
        </div>
        ${subject.status === 'completed' ? '<div class="progress-bar"><div class="progress-fill" style="width: 100%;"></div></div>' : ''}
    `;

    return subjectDiv;
}

// Renderizar la malla curricular
function renderMalla() {
    const mallaContainer = document.getElementById('mallaCurricular');
    mallaContainer.innerHTML = ''; // Clear previous content

    const filteredSubjects = Object.entries(subjects).filter(([code, subject]) => {
        const matchesFilter = currentFilter === 'all' || subject.status === currentFilter;
        return matchesFilter;
    });

    if (currentView === 'semester') {
        const semesters = {};
        // Group subjects by semester, including "electiva"
        filteredSubjects.forEach(([code, subject]) => {
            const semesterKey = subject.semester;
            if (!semesters[semesterKey]) {
                semesters[semesterKey] = [];
            }
            semesters[semesterKey].push({ code, subject });
        });

        // Sort semesters numerically, and put "electiva" at the end
        Object.keys(semesters).sort((a, b) => {
            if (a === 'electiva') return 1;
            if (b === 'electiva') return -1;
            return parseInt(a) - parseInt(b);
        }).forEach(semesterKey => {
            const semesterDiv = document.createElement('div');
            semesterDiv.className = 'semester';

            const semesterName = semesterKey === 'electiva' ? 'Materias Electivas' : `Semestre ${semesterKey}`;
            semesterDiv.innerHTML = `<div class="semester-header">${semesterName}</div>`;

            const subjectsGrid = document.createElement('div');
            subjectsGrid.className = 'subjects-grid';

            let completedInSemester = 0;
            semesters[semesterKey].forEach(({ code, subject }) => {
                subjectsGrid.appendChild(createSubjectElement(code, subject));
                if (subject.status === 'completed') {
                    completedInSemester++;
                }
            });

            const totalInSemester = semesters[semesterKey].length;
            const semesterProgress = totalInSemester > 0 ? Math.round((completedInSemester / totalInSemester) * 100) : 0;

            const progressDiv = document.createElement('div');
            progressDiv.className = 'semester-progress';
            progressDiv.innerHTML = `
                <div class="semester-progress-text">Progreso del semestre: ${completedInSemester}/${totalInSemester} (${semesterProgress}%)</div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${semesterProgress}%;"></div>
                </div>
            `;

            semesterDiv.appendChild(subjectsGrid);
            semesterDiv.appendChild(progressDiv);
            mallaContainer.appendChild(semesterDiv);
        });
    } else if (currentView === 'status') {
        const statusGroups = {
            'completed': [],
            'current': [],
            'available': [],
            'blocked': []
        };

        filteredSubjects.forEach(([code, subject]) => {
            if (statusGroups[subject.status]) {
                statusGroups[subject.status].push({ code, subject });
            }
        });

        // Main container for status groups
        const statusViewContainer = document.createElement('div');
        statusViewContainer.className = 'status-view-container'; // New class for flexbox (defined in CSS)

        for (const statusType of ['completed', 'current', 'available', 'blocked']) {
            if (statusGroups[statusType].length > 0) {
                const groupDiv = document.createElement('div');
                groupDiv.className = `status-group status-group-${statusType}`; // Class for group styles (defined in CSS)

                const statusName = getStatusText(statusType);
                groupDiv.innerHTML = `<div class="status-group-header status-badge ${statusType}">${statusName}</div>`; // Group header

                const subjectsGrid = document.createElement('div');
                subjectsGrid.className = 'subjects-grid'; // Reuse the subjects grid

                statusGroups[statusType].forEach(({ code, subject }) => {
                    subjectsGrid.appendChild(createSubjectElement(code, subject));
                });

                groupDiv.appendChild(subjectsGrid);
                statusViewContainer.appendChild(groupDiv); // Add the group to the main container
            }
        }
        mallaContainer.appendChild(statusViewContainer); // Add the main container to the DOM
    } else if (currentView === 'prereqs') {
        // Logic for the prerequisite view (keep original or adjust if necessary)
        mallaContainer.innerHTML = `<div style="text-align: center; padding: 50px; font-size: 1.2em; color: ${isDarkMode ? '#b0b0b0' : '#666'};">
                                        Esta vista mostrará las materias y sus prerequisitos de forma interactiva. (Próximamente)
                                    </div>`;
    }
    // No need to apply theme here; it's handled by the global `setTheme` and initial load.
    // However, if elements are dynamically added with inline styles that need to adapt, you'd add
    // specific logic here. The current CSS with .dark-mode class handles most cases.
}

// Function to open the modal (statistics or subject information)
function openModal() {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');

    modalTitle.textContent = 'Estadísticas de la Malla Curricular';

    let totalSubjects = Object.keys(subjects).length;
    let completedSubjects = Object.values(subjects).filter(s => s.status === 'completed').length;
    let currentSubjects = Object.values(subjects).filter(s => s.status === 'current').length;
    let availableSubjects = Object.values(subjects).filter(s => s.status === 'available').length;
    let blockedSubjects = Object.values(subjects).filter(s => s.status === 'blocked').length;

    modalContent.innerHTML = `
        <p><strong>Total de materias:</strong> ${totalSubjects}</p>
        <p><strong>Materias completadas:</strong> ${completedSubjects}</p>
        <p><strong>Materias actuales:</strong> ${currentSubjects}</p>
        <p><strong>Materias disponibles:</strong> ${availableSubjects}</p>
        <p><strong>Materias bloqueadas:</strong> ${blockedSubjects}</p>
        <p><strong>Progreso total:</strong> ${Math.round((completedSubjects / totalSubjects) * 100)}%</p>
        <hr>
        <h3>Materias Completadas:</h3>
        <ul>
            ${Object.entries(subjects).filter(s => s[1].status === 'completed').map(([code, subj]) => `
                <li>${subj.name} (${code}) - Nota: ${subj.grade || 'N/A'} ${subj.notes ? `(Notas: ${subj.notes})` : ''}</li>
            `).join('')}
        </ul>
        <h3>Materias Actuales:</h3>
        <ul>
            ${Object.entries(subjects).filter(s => s[1].status === 'current').map(([code, subj]) => `
                <li>${subj.name} (${code})</li>
            `).join('')}
        </ul>
        <h3>Materias Disponibles:</h3>
        <ul>
            ${Object.entries(subjects).filter(s => s[1].status === 'available').map(([code, subj]) => `
                <li>${subj.name} (${code})</li>
            `).join('')}
        </ul>
    `;
    modal.style.display = 'block';
    applyThemeToModal(); // Apply theme to modal
}

function openSubjectModal(code, subject) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');

    modalTitle.textContent = `Información de la Materia: ${subject.name}`;

    const prereqsList = (subject.prereqs && subject.prereqs.length > 0)
        ? `<ul>${subject.prereqs.map(p => {
            const prereqSubject = subjects[p];
            const prereqStatus = prereqSubject ? getStatusText(prereqSubject.status) : 'Desconocido';
            return `<li>${p}: ${prereqSubject ? prereqSubject.name : 'N/A'} (<span class="status-badge ${prereqSubject ? prereqSubject.status : ''}">${prereqStatus}</span>)</li>`;
        }).join('')}</ul>`
        : (subject.prereq_text ? `<p>${subject.prereq_text}</p>` : 'No tiene prerequisitos.');

    modalContent.innerHTML = `
        <p><strong>Código:</strong> ${code}</p>
        <p><strong>Nombre:</strong> ${subject.name}</p>
        <p><strong>Semestre:</strong> ${subject.semester === 'electiva' ? 'Electiva' : subject.semester}</p>
        <p><strong>Estado:</strong> <span class="status-badge ${subject.status}">${getStatusText(subject.status)}</span></p>
        ${subject.grade ? `<p><strong>Nota:</strong> ${subject.grade}</p>` : ''}
        ${subject.notes ? `<p><strong>Notas Adicionales:</strong> ${subject.notes}</p>` : ''}
        <p><strong>Prerequisitos:</strong></p>
        ${prereqsList}
        <div style="margin-top: 20px;">
            <button class="btn btn-primary" onclick="editSubjectDetails('${code}')">✏️ Editar Detalles</button>
            <button class="btn btn-warning" onclick="toggleSubjectStatus('${code}')">🔄 Cambiar Estado</button>
        </div>
    `;
    modal.style.display = 'block';
    applyThemeToModal(); // Apply theme to modal
}

function editSubjectDetails(code) {
    const subject = subjects[code];
    if (!subject) return;

    const newGrade = prompt(`Editar nota para ${subject.name} (actual: ${subject.grade || 'Ninguna'}):`);
    if (newGrade !== null) {
        subject.grade = newGrade.trim() !== '' ? newGrade : null;
    }

    const newNotes = prompt(`Editar notas para ${subject.name} (actual: ${subject.notes || 'Ninguna'}):`);
    if (newNotes !== null) {
        subject.notes = newNotes.trim();
    }

    saveData();
    renderMalla();
    updateStats();
    closeModal(); // Close the current modal
    openSubjectModal(code, subject); // Reopen it with the new data
    showNotification('Detalles de materia actualizados.', 'info');
}

// Function to close the modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Function to toggle the view
function toggleView(view) {
    currentView = view;
    renderMalla();
    // Update active buttons
    document.querySelectorAll('.controls .btn-primary').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.controls button[onclick="toggleView('${view}')"]`).classList.add('active');
}

// Function to search subjects
function searchSubjects(query) {
    const searchText = query.toLowerCase();
    const allSubjects = document.querySelectorAll('.subject');
    allSubjects.forEach(subjectDiv => {
        const subjectName = subjectDiv.querySelector('.subject-name').textContent.toLowerCase();
        const subjectCode = subjectDiv.querySelector('.subject-code').textContent.toLowerCase();
        if (subjectName.includes(searchText) || subjectCode.includes(searchText)) {
            subjectDiv.style.display = 'block';
        } else {
            subjectDiv.style.display = 'none';
        }
    });

    // Adjust visibility of semester/status containers
    if (currentView === 'semester') {
        const semesterDivs = document.querySelectorAll('.semester');
        semesterDivs.forEach(semDiv => {
            const subjectsInSem = semDiv.querySelectorAll('.subject');
            let hasVisibleSubjects = false;
            subjectsInSem.forEach(sub => {
                if (sub.style.display === 'block') {
                    hasVisibleSubjects = true;
                }
            });
            semDiv.style.display = hasVisibleSubjects ? 'block' : 'none';
        });
    } else if (currentView === 'status') {
        const statusGroups = document.querySelectorAll('.status-group');
        statusGroups.forEach(groupDiv => {
            const subjectsInGroup = groupDiv.querySelectorAll('.subject');
            let hasVisibleSubjects = false;
            subjectsInGroup.forEach(sub => {
                if (sub.style.display === 'block') {
                    hasVisibleSubjects = true;
                }
            });
            groupDiv.style.display = hasVisibleSubjects ? 'block' : 'none';
        });
    }
}

// Function to filter subjects
function filterSubjects(filter) {
    currentFilter = filter;
    renderMalla(); // Rerender to apply the filter
    // Update active filter buttons
    document.querySelectorAll('.filters .filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.filters button[onclick="filterSubjects('${filter}')"]`).classList.add('active');
}

// Function to export data
function exportData() {
    const data = JSON.stringify(subjects, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'malla_curricular_progreso.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showNotification('Datos exportados exitosamente.', 'success');
}

// Function to import data
function importData() {
    document.getElementById('fileInput').click();
}

function handleFileImport(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const importedData = JSON.parse(e.target.result);
                // Merge imported data with current data
                for (const code in importedData) {
                    if (subjects[code]) { // Only update if the subject exists in the original structure
                        subjects[code].status = importedData[code].status || subjects[code].status;
                        subjects[code].grade = importedData[code].grade || subjects[code].grade;
                        subjects[code].notes = importedData[code].notes || subjects[code].notes;
                    }
                }
                updatePrerequisites();
                renderMalla();
                updateStats();
                saveData();
                showNotification('Datos importados y fusionados exitosamente.', 'success');
            } catch (error) {
                showNotification('Error al importar el archivo. Asegúrate de que sea un JSON válido.', 'error');
                console.error("Error importing file:", error);
            }
        };
        reader.readAsText(file);
    }
}

// --- Theme Toggle Functions ---

// Function to set the theme
function setTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        themeToggleBtn.textContent = '☀️'; // Sun icon for dark mode
        isDarkMode = true;
    } else {
        body.classList.remove('dark-mode');
        themeToggleBtn.textContent = '🌙'; // Moon icon for light mode
        isDarkMode = false;
    }
    localStorage.setItem('theme', theme);
    // Re-render malla to update any inline styles that depend on theme (like notes color in subject cards)
    renderMalla();
}

// Function to apply theme to dynamically created modal content
function applyThemeToModal() {
    const modalContentDiv = document.querySelector('#modal .modal-content');
    if (modalContentDiv) {
        if (isDarkMode) {
            modalContentDiv.classList.add('dark-mode-modal'); // You might want to define 'dark-mode-modal' in your CSS
        } else {
            modalContentDiv.classList.remove('dark-mode-modal');
        }
    }
}

// Toggle theme function triggered by button click
function toggleTheme() {
    if (isDarkMode) {
        setTheme('light'); // Switch to light mode
    } else {
        setTheme('dark'); // Switch to dark mode
    }
}

// Function to reset progress
function resetProgress() {
    if (confirm('¿Estás seguro de que quieres reiniciar todo el progreso? Esto no se puede deshacer.')) {
        // Reset all subjects to their initial state based on the deep copy
        for (const code in subjects) {
            if (initialSubjectsState[code]) {
                subjects[code].status = initialSubjectsState[code].status;
                subjects[code].grade = initialSubjectsState[code].grade;
                subjects[code].notes = initialSubjectsState[code].notes;
            }
        }
        // Force the initial available state for first semester/no prereq subjects
        updatePrerequisites();
        saveData(); // Save the reset state
        renderMalla(); // Re-render the malla
        updateStats(); // Update statistics
        showNotification('Progreso reiniciado exitosamente.', 'info');
    }
}

// --- Initial Setup on DOM Content Loaded ---
document.addEventListener('DOMContentLoaded', () => {
    // Check for saved theme preference on load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        // Default to light mode if no preference is saved
        setTheme('light');
    }

    // Attach event listener for the theme toggle button
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // Now load saved progress data
    loadSavedData();
    // Update prerequisites based on loaded data
    updatePrerequisites();
    // Render the malla based on loaded data and updated prerequisites
    renderMalla();
    // Update statistics
    updateStats();
});