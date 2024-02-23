-- ** create tables from startting
-- create uuid function or EXTENSION
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- create roles table
CREATE TABLE roles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- create users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    role_id UUID REFERENCES roles(id),
    name TEXT,
    email TEXT NOT NULL,
    number INT,
    password TEXT,    
    CONSTRAINT fk_roles FOREIGN KEY (role_id) REFERENCES roles(id),
    CONSTRAINT idx_users_id UNIQUE (id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- create users_details table
CREATE TABLE user_details (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    address TEXT,
    email_otp TEXT,
    email_sent_time TIMESTAMP,
    city TEXT,    
    pin_code TEXT,
    is_registered BOOLEAN,
    is_active BOOLEAN,
    CONSTRAINT fk_users FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT idx_user_details_id UNIQUE (id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- create category table
CREATE TABLE categorys (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- create product table
create table product (
	id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
	product_images TEXT ARRAY,
	category_id uuid REFERENCES categorys(id),
	name TEXT,
	CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES categorys(id),
	CONSTRAINT idx_product_id UNIQUE (id),
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- create product details
CREATE TABLE product_details (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID REFERENCES product(id),
    price INT,
    disc TEXT,
    avilabe_size TEXT ARRAY,
    rating TEXT,    
    reviwers TEXT ARRAY,
    saler_id uuid REFERENCES users(id),
    is_active BOOLEAN,
    CONSTRAINT fk_product FOREIGN KEY (product_id) REFERENCES product(id),
    CONSTRAINT fk_users FOREIGN KEY (saler_id) REFERENCES users(id),
    CONSTRAINT idx_product_details_id UNIQUE (id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- create reviwers table
CREATE TABLE reviwers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID REFERENCES product(id),
    reviwer_rating INT,
    reviwer_disc TEXT,
    avilabe_size TEXT ARRAY,
    rating TEXT,    
    reviwers TEXT ARRAY,
    reviwer_id uuid REFERENCES users(id),
    is_active BOOLEAN,
    CONSTRAINT fk_product FOREIGN KEY (product_id) REFERENCES product(id),
    CONSTRAINT fk_users FOREIGN KEY (reviwer_id) REFERENCES users(id),
    CONSTRAINT idx_reviwers_id UNIQUE (id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

