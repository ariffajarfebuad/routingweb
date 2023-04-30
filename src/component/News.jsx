import React, { useEffect } from 'react';
import axios from 'axios';


function App(){
  state = {
    datas: [],
    isLoading: true,
    errors: null
  };

  Databerita()
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=id&apiKey=41c65c464645e6440791b929f0d26153ac'
      )
      .then(response =>
        response.data.articles.map(
          newsdata => ({
            name: `${newsdata.source.name}`,
            title: `${newsdata.title}`,
            description: `${newsdata.description}`,
            content: `${newsdata.content}`,
            image: `${newsdata.urlToImage}`,
            create: `${newsdata.publishedAt}`
          })
         
        )
      )

      .then(datas => {
        this.setState(
          {
            datas,
            isLoading: false
          },
          console.log(datas)
        );
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  useEffect(() => {
    this.Databerita();
  }, []);
    
  const Effect = () => {
    const { isLoading, datas } = this.state;
    return (
      <React.Fragment>
        
          <div className="container judulber">
            <div className="row">
                <div className="col-md-12">
                    <div className="alert alert-primary" role="alert"> 
                    </div>
                </div>
                
            </div>
          </div>

          
            {!isLoading ? (
              datas.map(data => {
                const {
                  name,
                  title,
                  description,
                  image,
                  content,
                  create
                } = data;

                return (
                  <div key={data.title} className='container testi'>
                  
                        <div className="col-md-4 kiri">
                            <img className='img-fluid' src={image} alt='images' />
                            <div className='content-detail'>
                            <span>{create}</span>
                            <h4 className='title'>{title}</h4>
                            <p className='desc'>{description}</p>
                            <h4 className='content-name'>{name}</h4>
                            
                            <p className='content'>{content}</p>
                           
                               
                              <button className='btn btn-info'>Read More</button>
                            
                            </div>
                        </div>
                   
                  </div>
                );
              })
            ) : (
            
            <div className="container">
                 <p className="text-center">Loading...</p>
            </div>
             
            )}
         
        
      </React.Fragment>
    );
  }

export default News;