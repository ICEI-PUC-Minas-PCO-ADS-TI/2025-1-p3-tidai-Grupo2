document.getElementById('addContent').addEventListener('click', function() {
            document.getElementById('modal').style.display = 'flex';
        });

        document.querySelector('.close').addEventListener('click', function() {
            document.getElementById('modal').style.display = 'none';
        });

        document.getElementById('saveContent').addEventListener('click', function() {
            let title = document.getElementById('contentTitle').value;
            if (title.trim() !== "") {
                alert('Conteúdo salvo: ' + title);
                document.getElementById('modal').style.display = 'none';
            } else {
                alert('Por favor, insira um título válido!');
            }
        });
