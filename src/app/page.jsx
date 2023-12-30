import Featured from "@/components/featured/Featured";
import styles from "./homepage.module.css";
import CategoryList from "@/components/categoryList/CategoryList";
import Menu from "@/components/menu/Menu";
import CardList from "@/components/cardList/CardList";


export default function Home({searchParams}) {

    const page=parseInt(searchParams.page) || 1 ;
   //  console.log(page);

  return (
     <div className={styles.container} >
        <Featured/>
        <CategoryList/>
        <div className={styles.content}>
           <CardList page={page}/> 
           <Menu/>
        </div>
     </div>
  )
}    
 