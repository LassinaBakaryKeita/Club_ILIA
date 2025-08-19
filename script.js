/**
 * Gestion des accordéons dépliants
 * Ajoute des événements click pour ouvrir/fermer les sections
 */
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionne tous les boutons qui déclenchent les accordéons
    const toggleButtons = document.querySelectorAll('.accordion-toggle');
    // Pour chaque bouton...
    toggleButtons.forEach(button => {
        // Ajoute un écouteur d'événement click
        button.addEventListener('click', function() {
            // Récupère l'ID de la cible à afficher/masquer
            const targetId = this.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            
            // Ferme tous les autres dépliants + réinitialise leurs flèches
            document.querySelectorAll('.accordion-content').forEach(content => {
                if (content.id !== targetId) {
                    content.classList.remove('active');
                    // Réinitialise la flèche des autres dépliants
                    const otherButton = document.querySelector(`[data-target="${content.id}"]`);
                    if (otherButton) {
                        otherButton.querySelector('.arrow').textContent = '▼';
                    }
                }
            });
            
            // Active/désactive le dépliant cliqué
            targetContent.classList.toggle('active');
            
            // Met à jour la flèche du bouton cliqué
            const arrow = this.querySelector('.arrow');
            arrow.textContent = targetContent.classList.contains('active') ? '▲' : '▼';
        });
    });
});