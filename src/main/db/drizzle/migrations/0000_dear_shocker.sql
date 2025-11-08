CREATE TABLE `bill` (
	`bill_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer NOT NULL,
	`customer_id` integer NOT NULL,
	`paymentAmount` real NOT NULL,
	`payment_method` text NOT NULL,
	`payment_status` text DEFAULT 'pending',
	`created_at` integer,
	`updated_at` integer,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`customer_id`) REFERENCES `customer`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `bill_bill_id_unique` ON `bill` (`bill_id`);--> statement-breakpoint
CREATE TABLE `categories` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `categories_id_unique` ON `categories` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `categories_name_unique` ON `categories` (`name`);--> statement-breakpoint
CREATE TABLE `checkouts` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`bill_id` integer NOT NULL,
	`item_id` integer NOT NULL,
	`quantity` integer NOT NULL,
	`price` real NOT NULL,
	`payed_amount` real NOT NULL,
	`total` real GENERATED ALWAYS AS ("quantity" * "price") VIRTUAL NOT NULL,
	`balance` real GENERATED ALWAYS AS ("total" - "payed_amount") VIRTUAL NOT NULL,
	`created_at` integer,
	`updated_at` integer,
	FOREIGN KEY (`bill_id`) REFERENCES `bill`(`bill_id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`item_id`) REFERENCES `items`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `checkouts_id_unique` ON `checkouts` (`id`);--> statement-breakpoint
CREATE TABLE `customer` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text NOT NULL,
	`address` text NOT NULL,
	`created_at` integer,
	`updated_at` integer
);
--> statement-breakpoint
CREATE UNIQUE INDEX `customer_id_unique` ON `customer` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `customer_email_unique` ON `customer` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `customer_phone_unique` ON `customer` (`phone`);--> statement-breakpoint
CREATE TABLE `defects` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`item_id` integer,
	`quantity` integer NOT NULL,
	`reason` text NOT NULL,
	`reported_by` integer NOT NULL,
	`created_at` integer,
	FOREIGN KEY (`item_id`) REFERENCES `items`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `defects_id_unique` ON `defects` (`id`);--> statement-breakpoint
CREATE TABLE `expired_items` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`item_id` integer,
	`quantity` integer NOT NULL,
	`expiration_date` integer NOT NULL,
	`disposed_by` integer NOT NULL,
	`reason` text,
	`created_at` integer,
	FOREIGN KEY (`item_id`) REFERENCES `items`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`disposed_by`) REFERENCES `user`(`user_id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `expired_items_id_unique` ON `expired_items` (`id`);--> statement-breakpoint
CREATE TABLE `items` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`category_id` integer NOT NULL,
	`supplier_id` integer NOT NULL,
	`barcode` text NOT NULL,
	`cost_price` real NOT NULL,
	`selling_price` real NOT NULL,
	`quantityInStock` integer NOT NULL,
	`reorder_level` integer NOT NULL,
	`created_at` integer,
	`updated_at` integer,
	FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`supplier_id`) REFERENCES `supplier`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `items_id_unique` ON `items` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `items_barcode_unique` ON `items` (`barcode`);--> statement-breakpoint
CREATE TABLE `restocks` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`supplier_id` integer NOT NULL,
	`user_id` integer NOT NULL,
	`total_cost` real NOT NULL,
	`created_at` integer,
	FOREIGN KEY (`supplier_id`) REFERENCES `supplier`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `restocks_id_unique` ON `restocks` (`id`);--> statement-breakpoint
CREATE TABLE `restock_items` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`restock_id` integer NOT NULL,
	`item_id` integer,
	`quantity` integer NOT NULL,
	`cost_price` real NOT NULL,
	FOREIGN KEY (`restock_id`) REFERENCES `restocks`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`item_id`) REFERENCES `items`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `restock_items_id_unique` ON `restock_items` (`id`);--> statement-breakpoint
CREATE TABLE `returned_orders` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`bill_id` integer,
	`item_id` integer,
	`quantity` integer NOT NULL,
	`reason` text NOT NULL,
	`created_at` integer,
	FOREIGN KEY (`bill_id`) REFERENCES `bill`(`bill_id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`item_id`) REFERENCES `items`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `returned_orders_id_unique` ON `returned_orders` (`id`);--> statement-breakpoint
CREATE TABLE `supplier` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text NOT NULL,
	`company` text NOT NULL,
	`address` text NOT NULL,
	`created_at` integer,
	`updated_at` integer
);
--> statement-breakpoint
CREATE UNIQUE INDEX `supplier_id_unique` ON `supplier` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `supplier_email_unique` ON `supplier` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `supplier_phone_unique` ON `supplier` (`phone`);--> statement-breakpoint
CREATE TABLE `user` (
	`user_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`username` text NOT NULL,
	`email` text NOT NULL,
	`password_hash` text NOT NULL,
	`role` text NOT NULL,
	`first_name` text NOT NULL,
	`last_name` text NOT NULL,
	`phone` text NOT NULL,
	`address` text NOT NULL,
	`bank_account` text NOT NULL,
	`created_at` integer,
	`updated_at` integer
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_user_id_unique` ON `user` (`user_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `user_username_unique` ON `user` (`username`);--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `user_phone_unique` ON `user` (`phone`);--> statement-breakpoint
CREATE UNIQUE INDEX `user_bank_account_unique` ON `user` (`bank_account`);--> statement-breakpoint
CREATE TABLE `user_sessions` (
	`session_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer NOT NULL,
	`token` text NOT NULL,
	`ip_address` text,
	`device_info` text,
	`login_time` integer,
	`logout_time` integer,
	`is_active` integer DEFAULT 1,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_sessions_session_id_unique` ON `user_sessions` (`session_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `user_sessions_token_unique` ON `user_sessions` (`token`);