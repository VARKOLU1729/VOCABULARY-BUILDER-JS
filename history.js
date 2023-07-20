const getAllItems = () => {
    const items = [];
    for (let i = 0; i < localStorage.length; i++) 
    {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      items.push({ key, value });
    }
    return items;
  };
  
const allItems = getAllItems();


const container = document.createElement('div');

for(let i=0; i<localStorage.length; i++)
{
    const listItem = document.createElement('div');
    listItem.style.fontSize = '25px'
    listItem.textContent = allItems[i].key +" -> "+allItems[i].value;
    // container.appendChild(listItem);
    document.body.append(listItem);
}
