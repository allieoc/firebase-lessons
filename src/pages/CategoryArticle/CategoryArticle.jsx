import React, { useEffect, useState } from 'react'
import './CategoryArticle.css'
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';
import ArticleCard from '../../components/ArticleCard/ArticleCard';

function CategoryArticle() {

  const {categoryName} = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(()=>{
    //create a reference to firestore db collection
    const articleRef = collection(db, "Articles");
    // now create query 
    const q = query(articleRef, where("category", "==", categoryName));

    //now get data that matches the query
    getDocs(q, articleRef).then((res)=>{
      const articles = res.docs.map(item => ({
        ...item.data(),
        id: item.id
    }));
    setArticles(articles);
    })
  }, [categoryName])

  return (
    <div>
      {
      articles.map(item => 
      <ArticleCard article={item} />)
      }
    </div>
  )
}

export default CategoryArticle