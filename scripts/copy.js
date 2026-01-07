document.addEventListener('DOMContentLoaded', function() {
    const copyBtn = document.getElementById('copy-btn');
    const commandEl = document.getElementById('command');

    if (copyBtn && commandEl) {
        const command = commandEl.textContent;

        copyBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(command);
                copyBtn.textContent = 'Copiado!';
                copyBtn.classList.add('copied');
                
                setTimeout(() => {
                    copyBtn.textContent = 'Copiar comando';
                    copyBtn.classList.remove('copied');
                }, 2000);
            } catch (err) {
                copyBtn.textContent = 'Erro ao copiar';
            }
        });
    }
});
