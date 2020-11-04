using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tech_Test_Challenge_API.Extensions
{
    public static class ShippingCostExtension
    {
        public static int ShippingCost(this decimal currentPrice)
        {
            return currentPrice < 50M ? 10 : 20;
        }
    }
}
