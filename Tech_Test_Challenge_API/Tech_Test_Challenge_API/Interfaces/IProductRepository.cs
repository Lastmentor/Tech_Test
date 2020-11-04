using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tech_Test_Challenge_API.Models;

namespace Tech_Test_Challenge_API.Interfaces
{
    public interface IProductRepository
    {
        IEnumerable<Product> GetAll();        

        int GetShippingCost(decimal price);
    }
}
