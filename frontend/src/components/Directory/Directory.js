import React, {useState, useEffect} from 'react';
import MenuItem from "../MenuItem/MenuItem"
import "./Directory.css"

const Directory = () => {
  // const [ id, setId ] = useState("")
  // const [ image, setImageUrl ] = useState("");
  // const [ title, setTitle ] = useState("")
  // const displayInfoCard = () => {
    const sections =[
      {
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id: 1
      },
      {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id: 2
      },
      {
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id: 3
      },
      {
        title: 'womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4
      },
      {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
        id: 5
      }
    ];
    //   sections.map(section=> {({title, imageUrl, id, size})
    //     setId(section.id)
    //     setTitle(section.title)
    //     setImageUrl(section.imageUrl)
    //   });
    //   debugger

    // }

    // useEffect (() => {
    //   displayInfoCard()
    // });

    return (
      <div className="directory-menu">
        { sections.map(({title, imageUrl, id, size})=>
          <MenuItem  id={id} title={title} imageUrl={imageUrl} size={size} />)
        }
      </div>
    );
}
export default Directory;
