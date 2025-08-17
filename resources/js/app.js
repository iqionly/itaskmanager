import './bootstrap';

// Default SortableJS
import Sortable from 'sortablejs';

// // Core SortableJS (without default plugins)
// import Sortable from 'sortablejs/modular/sortable.core.esm.js';

// // Complete SortableJS (with all plugins)
// import Sortable from 'sortablejs/modular/sortable.complete.esm.js';

// Enable drag-drop between columns
["hold", "progress", "finished", "archive"].forEach(id => {
    new Sortable(document.getElementById(id), {
    group: "tasks",
    animation: 150,
    ghostClass: "opacity-50"
    });
});