import React, { Component } from 'react';

class Table extends Component {
    state = {
        categories: []
       
    }

    componentDidMount(){
        this.getApi()
    }

    getApi = ()=>{
        fetch('http://siparis.terzi.online/api/getOrder.php')
        .then(response=>response.json())
        .then(data=>this.setState({categories:data}))
      }

      
    render() {

        return (
            <div className='flex justify-center relative'>
                <div className=' max-h-96'>
                    <table className='min-w-full table-auto"'>
                        <thead className='sticky top-0 bg-gray-500'>
                            <tr className='text-white'>
                                <th className=' h-12 border-b border-gray-200'>id</th>
                                <th className=' h-12 border-b border-gray-200'>durum</th>
                                <th className=' h-12 border-b border-gray-200'>siparis_no</th>
                                <th className=' h-12 border-b border-gray-200'>pazaryeri_kargo</th>
                                <th className=' h-12 border-b border-gray-200'>mail</th>
                                <th className=' h-12 border-b border-gray-200'>tarih</th>
                                <th className=' h-12 border-b border-gray-200'>zaman</th>
                                <th className=' h-12 border-b border-gray-200'>teslim_alici</th>
                                <th className=' h-12 border-b border-gray-200'>teslim_adres</th>
                                <th className=' h-12 border-b border-gray-200'>teslim_tel</th>
                                <th className=' h-12 border-b border-gray-200'>teslim_siparis_ili</th>
                             
                               
                            </tr>
                        </thead>
                        <tbody className=''>
                            {this.state.categories.map(category => (
                                <tr  onClick={()=>this.props.changeCategory(category)}  className=' hover:bg-green-300 transition-all duration-100 cursor-pointer' key={category.id}>
                                    <td className=' text-center border-b border-gray-300 pb-3'>{category.id}</td>
                                    <td className=' text-center border-b border-gray-300 pb-3'>{category.durum}</td>
                                    <td className=' text-center border-b border-gray-300 pb-3'>{category.siparis_no}</td>
                                    <td className=' text-center border-b border-gray-300 pb-3'>{category.pazaryeri_kargo}</td>
                                    <td className=' text-center border-b border-gray-300 pb-3'>{category.mail}</td>
                                    <td className=' text-center border-b border-gray-300 pb-3'>{category.tarih}</td>
                                    <td className=' text-center border-b border-gray-300 pb-3'>{category.zaman}</td>
                                    <td className=' text-center border-b border-gray-300 pb-3'>{category.teslim_alici}</td>
                                    <td className=' text-center border-b border-gray-300 pb-3'>{category.teslim_adres}</td>
                                    <td className=' text-center border-b border-gray-300 pb-3'>{category.teslim_tel}</td>
                                    <td className=' text-center border-b border-gray-300 pb-3'>{category.teslim_siparis_ili}</td>
                                 
                                
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    
                </div>
                
            </div>
        );
    }
}

export default Table;
