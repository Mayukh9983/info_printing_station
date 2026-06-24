CREATE TABLE `customers` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`phone` varchar(20) NOT NULL,
	`email` varchar(320),
	`address` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `customers_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `orders` (
	`id` int AUTO_INCREMENT NOT NULL,
	`orderId` varchar(50) NOT NULL,
	`customerId` int NOT NULL,
	`fileUrl` varchar(500),
	`fileKey` varchar(500),
	`fileName` varchar(255),
	`pages` int NOT NULL,
	`copies` int NOT NULL,
	`paperType` varchar(50) NOT NULL,
	`paperSize` varchar(10) NOT NULL,
	`printColor` varchar(20) NOT NULL,
	`printingSides` varchar(20) NOT NULL,
	`bindingOption` varchar(50) NOT NULL,
	`coverOption` varchar(50) NOT NULL,
	`pricePerPage` int NOT NULL,
	`totalCost` int NOT NULL,
	`coverCost` int NOT NULL DEFAULT 0,
	`status` enum('Pending','Printing','Ready for Pickup','Out for Delivery','Delivered') NOT NULL DEFAULT 'Pending',
	`paymentMethod` varchar(20),
	`paymentStatus` varchar(20) NOT NULL DEFAULT 'Due',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `orders_id` PRIMARY KEY(`id`),
	CONSTRAINT `orders_orderId_unique` UNIQUE(`orderId`)
);
--> statement-breakpoint
CREATE TABLE `pricingConfig` (
	`id` int AUTO_INCREMENT NOT NULL,
	`printType` varchar(50) NOT NULL,
	`printingSides` varchar(20) NOT NULL,
	`pricePerPage` int NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `pricingConfig_id` PRIMARY KEY(`id`)
);
