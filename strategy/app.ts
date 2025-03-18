import ConsoleStrategy from "./consoleStrategy";
import FileStrategy from "./fileStrategy";
import logger from "./logger";
import NoDateStrategy from "./noDateStrategy";
import NoneStrategy from "./noneStrategy";
import ToMorseCodeStrategy from "./toMorseCodeStrategy";

logger.log("Hello World")
logger.log("Hi World")
logger.log("Yo World")

logger.setStrategy(new NoDateStrategy())

logger.log("Hello World")
logger.log("Hi World")
logger.log("Yo World")

logger.setStrategy(new ConsoleStrategy())

logger.log("Hello World")
logger.log("Hi World")
logger.log("Yo World")

logger.setStrategy(new ToMorseCodeStrategy())

logger.log("Hello World")
logger.log("Hi World")
logger.log("Yo World")

logger.setStrategy(new FileStrategy())

logger.log("Hello World")
logger.log("Hi World")
logger.log("Yo World")

logger.setStrategy(new NoneStrategy())

logger.log("Hello World")
logger.log("Hi World")
logger.log("Yo World")
