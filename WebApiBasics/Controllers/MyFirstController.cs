using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApiBasics.Controllers
{
    /// <summary>
    /// This service justs demonstrates how to write a WebAPI
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class MyFirstController : ControllerBase
    {
        //public string GetTime()
        //{
        //    return DateTime.Now.ToString();
        //}
        /// <summary>
        /// This service justs demonstrates how to write a WebAPI
        /// </summary>
        /// <returns>Just returns a simple list of words</returns>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "Here's", "some", "words", "in", "an", "array" };
        }

        /// <summary>
        /// This is the Get that takes an argument
        /// </summary>
        /// <param name="id">Give me an integer</param>
        /// <returns>I'll send back your integer, appended to a short message</returns>
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "You asked for: " + id.ToString();
        }

    }
}