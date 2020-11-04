using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tech_Test_Challenge_API.Models;
using Tech_Test_Challenge_API.Extensions;

namespace Tech_Test_Challenge_API.Interfaces
{
    public class MockProductRepository : IProductRepository
    {
        private List<Product> products = new List<Product>();

        public MockProductRepository()
        {
            products.Add(new Product { Id = 1, Name = "Tomato soup",  Category = "Food", Price = 5 });
            products.Add(new Product { Id = 2, Name = "Nescafe",  Category = "Drink", Price = 20 });
            products.Add(new Product { Id = 3, Name = "Yo-yo",  Category = "Toys", Price = 3 });
            products.Add(new Product { Id = 4, Name = "Pizza",  Category = "Food", Price = 10 });
            products.Add(new Product { Id = 5, Name = "Chocolate",  Category = "Food", Price = 3.25M });
            products.Add(new Product { Id = 6, Name = "Hawaiian Tropic Sunless",  Category = "Tanning Essentials", Price = 13.6M });
            products.Add(new Product { Id = 7, Name = "Monster Energy Drink", Category = "Drink", Price = 8.85M });
            products.Add(new Product { Id = 8, Name = "Carot", Category = "Food", Price = 2 });
            products.Add(new Product { Id = 9, Name = "Milk", Category = "Drink", Price = 3 });
            products.Add(new Product { Id = 10, Name = "Book", Category = "Stationery", Price = 5 });
            products.Add(new Product { Id = 11, Name = "Eraser", Category = "Stationery", Price = 3.25M });
            products.Add(new Product { Id = 12, Name = "Paper", Category = "Stationery", Price = 2.5M });
            products.Add(new Product { Id = 13, Name = "Pen", Category = "Stationery", Price = 10 });
            products.Add(new Product { Id = 14, Name = "Marker", Category = "Stationery", Price = 5 });
            products.Add(new Product { Id = 15, Name = "Sticky notes", Category = "Stationery", Price = 3.75M });
        }

        public IEnumerable<Product> GetAll()
        {
            return products;
        }

        public int GetShippingCost(decimal price)
        {
            int cost = price.ShippingCost();
            return cost;
        }       
    }
}