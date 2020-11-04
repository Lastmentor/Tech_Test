using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Tech_Test_Challenge_API.Interfaces;
using Tech_Test_Challenge_API.Models;

namespace Tech_Test_Challenge_API.Controllers
{
    public class ProductsController : Controller
    {
        private readonly IProductRepository _productRepository;

        public ProductsController(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        [HttpGet]
        public IEnumerable<Product> Index()
        {
            return _productRepository.GetAll();
        }

        [HttpGet]
        public int Cost(decimal price)
        {
            return _productRepository.GetShippingCost(price);
        }                 
    }
}