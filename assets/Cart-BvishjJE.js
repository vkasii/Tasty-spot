import{r,j as e}from"./index-DKqdW1ek.js";import{R as n}from"./RecipeItem-Dk_hgM5w.js";const o="_container_19lpq_1",p="_empty_19lpq_7",a={container:o,empty:p},i=()=>{const[t,c]=r.useState([]);return r.useEffect(()=>{c(JSON.parse(localStorage.getItem("cartRecipes")||"[]"))},[t]),e.jsx(e.Fragment,{children:t.length>0?e.jsx("ul",{className:a.container,children:t.map(s=>e.jsx(n,{recipe:s},s.idMeal))}):e.jsx("h3",{className:a.empty,children:"Your cart is empty"})})},x=()=>e.jsx(e.Fragment,{children:e.jsx(i,{})});export{x as default};
