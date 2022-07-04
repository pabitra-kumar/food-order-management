// const [url, setUrl] = useState("https://www.themealdb.com/api/json/v1/1/filter.php?a=indian")
  // useEffect(() => {
  //   fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=indian")
  //   .then(response=>response.json)
  //   .then(res =>{
  //     console.log(res)
  //       const {meals} = res
  //       console.log(meals)
  //     const x= meals.length
  //     for(let i=0;i<x;i++)
  //     {
  //     const {idMeal, strMeal, strMealThumb, } = meals[i]
  //     let obj = {
  //       key: idMeal,
  //       name: strMeal,
  //       img: strMealThumb,
  //       inStock: 10,
  //       inCart: 0,
  //     }
  //     arr.push(obj);
  //     console.log(obj)
  //     }
  //     setFoods(arr);
  //   })
  // }, [])

  // useEffect(
  // async function getFood() {
  //   let reference = await fetch(url)
  //   let data = await reference.json()
  //   const {meals} = data;
  //   const x= meals.length
  //   for(let i=0;i<x;i++)
  //   {
  //   const {idMeal, strMeal, strMealThumb, } = meals[i]
  //   let obj = {
  //     key: idMeal,
  //     name: strMeal,
  //     img: strMealThumb,
  //     inStock: 10,
  //     inCart: 0,
  //   }
  //   arr.push(obj);
  //   console.log(obj)
  // }
  // setFoods(arr)
  // } , [])
  // getFood();
