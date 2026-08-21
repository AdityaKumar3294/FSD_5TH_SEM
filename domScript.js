let count = 1;
 let total = 0;
 function addPara() {
            const newParagraph = document.createElement("p");
            
            newParagraph.textContent = "This is paragraph number " + count;
            newParagraph.className = "dynamic-text"; 
            
            const container = document.getElementById("content-container");
            container.appendChild(newParagraph);
            
            count++; 
            total++;
        }

        function removePara() {
            const container = document.getElementById("content-container");
            
            
            if (container.lastElementChild) {
                container.removeChild(container.lastElementChild);
                count--; 
            } else {
                alert("No more paragraphs to remove!");
            }
        }

        function removeAll() {
             const container = document.getElementById("content-container");        
             if(container.lastElementChild)
             {
                 alert("No more paragraphs to remove!");         
             }
            for(let i=0;i<total;i++)
            {
            if (container.lastElementChild) {
                container.removeChild(container.lastElementChild);
                count--;
            } 
        }

        }