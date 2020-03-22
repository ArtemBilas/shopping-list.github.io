let input = document.querySelector('input'),
    btnAddItem = document.querySelector('button'),
    ul = document.querySelector('ul')
    dot = "	&#9675;";


    btnAddItem.addEventListener('click', function () {

        let value = input.value.trim();
        let btnBold = document.querySelector('.btn-bold');

        if (value !== '') {
            let listItem = document.createElement('li'),
                myDiv = document.createElement('div'),
                mySpan = document.createElement('span'),
                btnBold = document.createElement('button'),
                btnMarker = document.createElement('button'),
                btnImportant = document.createElement('button'),
                btnLineThrough = document.createElement('button'),
                btnDelete = document.createElement('button');

                btnDelete.textContent = 'Delete';
                btnDelete.setAttribute('title', 'Delete');
                btnDelete.classList.add('delete');
            
                btnBold.textContent = 'B';
                btnBold.setAttribute('title', 'Bold');
                btnBold.classList.add('btn-bold');

                btnMarker.textContent = 'M';
                btnMarker.setAttribute('title', 'Marker');
                btnMarker.classList.add('btn-marker');

                btnImportant.textContent = 'I';
                btnImportant.setAttribute('title', 'Important');
                btnImportant.classList.add('btn-important');

                btnLineThrough.textContent = 'LT';
                btnLineThrough.setAttribute('title', 'Line-Through');
                btnLineThrough.classList.add('btn-line-through');

                btnDelete.onclick = () => {
                    ul.removeChild(listItem);
                }
                
                btnBold.onclick = () => {
                    mySpan.classList.toggle('btn-bold');
                }
                
                btnMarker.onclick = () => {
                    mySpan.classList.toggle('btn-marker');
                }

                btnImportant.onclick = () => {
                    mySpan.classList.toggle('btn-important');
                }

                btnLineThrough.onclick = () => {
                    mySpan.classList.toggle('btn-line-through');
                }

                mySpan.innerHTML = `${dot} ${value}`;
                listItem.appendChild(mySpan);
                myDiv.appendChild(btnBold);
                myDiv.appendChild(btnMarker)
                myDiv.appendChild(btnImportant);
                myDiv.appendChild(btnLineThrough);
                myDiv.appendChild(btnDelete);
                listItem.appendChild(myDiv);
                ul.appendChild(listItem);
                input.value = '';
                input.focus();
        } else {
            value = '';
        }

    });

    


    

    



    